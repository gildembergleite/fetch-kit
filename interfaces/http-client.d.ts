import { RequestOptions } from './requests-options';
export interface HttpClient {
    request<RequestType, BodyParams>(url: string, options: RequestOptions<BodyParams>): Promise<RequestType>;
}
