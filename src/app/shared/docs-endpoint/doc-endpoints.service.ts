import {Injectable} from "@angular/core";

@Injectable()
/**
 * Use Angular Dependency Injection to inject different docEndpointService i.e. per environment
 */
export abstract class DocEndpointsService {
  /**
   * Get the urls under which the asyncApi json files are located
   * @param contextPath Url prefix of the current page
   */
  abstract getDocEndpoints(contextPath: string): string[];
}
