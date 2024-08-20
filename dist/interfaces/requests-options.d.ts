import { RequestHeaders } from "./request-headers";
import { RequestParams } from "./request-params";
export interface RequestOptions {
    method?: string;
    headers?: RequestHeaders;
    body?: any;
    params?: RequestParams;
}
