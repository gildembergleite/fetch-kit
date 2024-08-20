import { RequestOptions } from "https";

export interface HttpClient {
  request<T>(url: string, options: RequestOptions): Promise<T>
}
