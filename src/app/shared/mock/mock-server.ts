import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import mockSpringwolfApp from './mock.springwolf-app.json';
import mockSpringwolfAmqp from './mock.springwolf-amqp-example.json';
import mockSpringwolfKafka from './mock.springwolf-kafka-example.json';

export class MockServer implements InMemoryDbService {
  createDb() {
    return {kafka: []};
  }

  get(reqInfo: RequestInfo) {
    console.log("Returning mock data")

    if (reqInfo.req.url.endsWith('/docs-demo')) {
      return this.createOkResponse(reqInfo, mockSpringwolfApp);
    } else if (reqInfo.req.url.endsWith('/docs-amqp')) {
      return this.createOkResponse(reqInfo, mockSpringwolfAmqp);
    } else if (reqInfo.req.url.endsWith('/docs-kafka')) {
      return this.createOkResponse(reqInfo, mockSpringwolfKafka);
    }

    return undefined;
  }

  private createOkResponse = (reqInfo: RequestInfo, payload: string|object) => {
    return reqInfo.utils.createResponse$(() => {
      return {
        status: STATUS.OK,
        body: payload
      }
    });
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.req.url.endsWith('/publish')) {
      return reqInfo.utils.createResponse$(() => {
        return {
          status: STATUS.OK
        }
      })
    }

    return undefined;
  }

}
