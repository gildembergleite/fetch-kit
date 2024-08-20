import { RequestParams } from "../interfaces/request-params";
export declare class UrlBuilder {
    static build(baseURL: string, endpoint: string, params?: RequestParams): string;
}
