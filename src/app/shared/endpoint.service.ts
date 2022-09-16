import {Injectable} from "@angular/core";
import {DocEndpointsService} from "./docs-endpoint/doc-endpoints.service";

@Injectable()
export class EndpointService {

    private readonly contextPath: string;

    constructor(private docEndpointsService: DocEndpointsService) {
      this.contextPath = EndpointService.getContextPath();
    }

    private static getContextPath(): string {
        let url = document.location.pathname;
        return url.split("/asyncapi-ui.html")[0];
    }

    public getDocEndpointUrls(): string[] {
      return this.docEndpointsService.getDocEndpoints(this.contextPath);
    }

    public getPublishEndpoint(protocol: string): string {
        return this.contextPath + `/${protocol}/publish`;
    }
}

