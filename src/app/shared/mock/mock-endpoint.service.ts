import {Injectable} from "@angular/core";
import {DocEndpointsService} from "../docs-endpoint/doc-endpoints.service";

@Injectable()
/**
 * The mock-server.ts provides multiple asyncApi documents
 */
export class MockDocsEndpointService implements DocEndpointsService {
  getDocEndpoints(contextPath: string): string[] {
    return [contextPath + '/docs-demo', contextPath + '/docs-amqp', contextPath + '/docs-kafka'];
  }
}
