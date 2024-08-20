import { RequestParams } from '../interfaces/request-params'

export class UrlBuilder {
  static build(
    baseURL: string,
    endpoint: string,
    params?: RequestParams,
  ): string {
    const url = new URL(`${baseURL}${endpoint}`)
    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, String(params[key])),
      )
    }
    return url.toString()
  }
}
