import { HttpClient } from '../interfaces/http-client';
import { RequestOptions } from '../interfaces/requests-options';
export declare class FetchHttpClient implements HttpClient {
    request<ResponseType, BodyParams>(url: string, options: RequestOptions<BodyParams>): Promise<ResponseType>;
    private handleResponse;
}
