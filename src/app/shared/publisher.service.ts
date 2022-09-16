import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndpointService } from './endpoint.service';

@Injectable()
export class PublisherService {

  constructor(private http: HttpClient, private endpoints: EndpointService) { }

  publish(protocol: string, topic: string, payload: object): Observable<unknown> {
    const url = this.endpoints.getPublishEndpoint(protocol);
    const params = new HttpParams().set('topic', topic);
    console.log(`Publishing to ${url}`);
    return this.http.post(url, payload, { params });
  }

}
