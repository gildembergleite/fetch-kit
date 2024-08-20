import { HttpClient } from "../interfaces/http-client";
import { RequestHeaders } from "../interfaces/request-headers";
import { RequestOptions } from "../interfaces/requests-options";
export interface BaseApiConstructorProps {
    baseURL: string;
    defaultHeaders?: RequestHeaders;
    httpClient: HttpClient;
}
export declare class BaseApi {
    private baseURL;
    private defaultHeaders;
    private httpClient;
    constructor({ baseURL, defaultHeaders, httpClient }: BaseApiConstructorProps);
    private buildRequestOptions;
    private buildURL;
    get<T>(endpoint: string, options?: RequestOptions): Promise<T>;
    post<T>(endpoint: string, options?: RequestOptions): Promise<T>;
    patch<T>(endpoint: string, options?: RequestOptions): Promise<T>;
    delete<T>(endpoint: string, options?: RequestOptions): Promise<T>;
}
