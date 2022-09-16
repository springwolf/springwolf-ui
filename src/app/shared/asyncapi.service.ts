import { AsyncApi } from './models/asyncapi.model';
import { Server } from './models/server.model';
import { Channel, Message, Operation } from './models/channel.model';
import { Schema } from './models/schema.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Info } from './models/info.model';
import { EndpointService } from './endpoint.service';

interface ServerAsyncApi {
    asyncapi: string;
    info: Info;
    servers: {
        [key: string]: {
            url: string;
            protocol: string;
        };
    };
    channels: {
        [key: string]: {
            description?: string;
            subscribe?: {
                message: Message | { oneOf: Message[] };
                bindings?: any;
            };
            publish?: {
                message: Message | { oneOf: Message[] };
                bindings?: any;
            };
        };
    };
    components: {
        schemas: Map<string, Schema>;
    };
}

@Injectable()
export class AsyncApiService {

    private nameSubject: Subject<string>;
    private docs: Map<string, AsyncApi>;

    constructor(private http: HttpClient, private endpoints: EndpointService) {
        this.nameSubject = new Subject<string>();
    }

    public setCurrentAsyncApiName(currnetAsyncApiName: string) {
        this.nameSubject.next(currnetAsyncApiName);
    }

    public getCurrentAsyncApiName(): Observable<string> {
        return this.nameSubject.asObservable();
    }

    public getAsyncApis(): Observable<Map<string, AsyncApi>> {
        if (this.docs) {
            return of(this.docs);
        }

        const httpObservables = this.endpoints.getDocEndpointUrls().map(url => this.http.get<ServerAsyncApi>(url));

        return forkJoin(httpObservables)
          .pipe(map(item => new Map(item.map(asyncApi => {return [asyncApi.info.title, this.toAsyncApi(asyncApi)]}))))
          .pipe(map(item => this.docs = item))
    }

    toAsyncApi(item: ServerAsyncApi): AsyncApi {
        return {
            info: item.info,
            servers: this.mapServers(item.servers),
            channels: this.mapChannels(item.channels),
            components: {
                schemas: item.components.schemas
            }
        };
    }

    private mapServers(servers: ServerAsyncApi["servers"]): Map<string, Server> {
        const s = new Map<string, Server>();
        Object.entries(servers).forEach(([k, v]) => s.set(k, v));
        return s;
    }

    private mapChannels(channels: ServerAsyncApi["channels"]): Channel[] {
        const s = new Array<Channel>();
        Object.entries(channels).forEach(([k, v]) => {
            const subscriberChannels = this.mapChannel(k, v.description, v.subscribe, " consumer")
            subscriberChannels.forEach(channel => s.push(channel))

            const publisherChannels = this.mapChannel(k, v.description, v.publish, " producer")
            publisherChannels.forEach(channel => s.push(channel))
        });
        return s;
    }

    private mapChannel(
        topicName: string,
        description: ServerAsyncApi["channels"][""]["description"],
        operation: ServerAsyncApi["channels"][""]["subscribe"] | ServerAsyncApi["channels"][""]["publish"],
        operationName: string): Channel[]
    {
        if(operation !== undefined) {
            let messages: Message[] = 'oneOf' in operation.message ? operation.message.oneOf : [operation.message];

            return messages.map(message => {
                return {
                    name: topicName,
                    description: description,
                    operation: this.mapOperation(operationName, message, operation.bindings)
                }
            })
        }
        return [];
    }

    private mapOperation(operationName: string, message: Message, bindings?: any): Operation {
        return {
            type: this.getProtocol(bindings) + operationName,
            message: message,
            bindings: bindings
        }
    }

    private getProtocol(bindings?: any): string {
        return Object.keys(bindings)[0];
    }

}
