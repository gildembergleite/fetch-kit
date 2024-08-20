import { HttpClient } from "../interfaces/http-client";
import { RequestOptions } from "../interfaces/requests-options";
export declare class FetchHttpClient implements HttpClient {
    request<T>(url: string, options: RequestOptions): Promise<T>;
    private handleResponse;
}
