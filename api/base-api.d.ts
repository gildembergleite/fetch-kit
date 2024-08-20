import { HttpClient } from '../interfaces/http-client';
import { RequestHeaders } from '../interfaces/request-headers';
import { RequestParams } from '../interfaces/request-params';
import { RequestOptions } from '../interfaces/requests-options';
export interface BaseApiConstructorProps {
    baseURL: string;
    defaultHeaders?: RequestHeaders;
    httpClient: HttpClient;
}
export declare class BaseApi {
    private baseURL;
    private defaultHeaders;
    private httpClient;
    constructor({ baseURL, defaultHeaders, httpClient, }: BaseApiConstructorProps);
    private buildRequestOptions;
    buildURL(endpoint: string, params?: RequestParams): string;
    get<ResponseType, BodyParams>(endpoint: string, options?: RequestOptions<BodyParams>): Promise<ResponseType>;
    post<ResponseType, BodyParams>(endpoint: string, options?: RequestOptions<BodyParams>): Promise<ResponseType>;
    patch<ResponseType, BodyParams>(endpoint: string, options?: RequestOptions<BodyParams>): Promise<ResponseType>;
    put<ResponseType, BodyParams>(endpoint: string, options?: RequestOptions<BodyParams>): Promise<ResponseType>;
    delete<ResponseType, BodyParams>(endpoint: string, options?: RequestOptions<BodyParams>): Promise<ResponseType>;
}
