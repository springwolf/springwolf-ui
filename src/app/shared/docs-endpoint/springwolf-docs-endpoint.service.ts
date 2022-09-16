import {Injectable} from "@angular/core";
import {DocEndpointsService} from "./doc-endpoints.service";

@Injectable()
/**
 * SpringWolfs asyncApi document is located under <contextPath>/docs
 */
export class SpringwolfDocsEndpointService implements DocEndpointsService {
  getDocEndpoints(contextPath: string): string[] {
    return [contextPath + '/docs'];
  }
}
