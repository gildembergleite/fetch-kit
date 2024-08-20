import { HttpClient } from '../interfaces/http-client'
import { RequestHeaders } from '../interfaces/request-headers'
import { RequestParams } from '../interfaces/request-params'
import { RequestOptions } from '../interfaces/requests-options'
import { UrlBuilder } from '../utils/url-builder'

export interface BaseApiConstructorProps {
  baseURL: string
  defaultHeaders?: RequestHeaders
  httpClient: HttpClient
}

export class BaseApi {
  private baseURL: string
  private defaultHeaders: RequestHeaders
  private httpClient: HttpClient

  constructor({
    baseURL,
    defaultHeaders = {},
    httpClient,
  }: BaseApiConstructorProps) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
    this.httpClient = httpClient
  }

  private buildRequestOptions<BodyParams>(
    options: RequestOptions<BodyParams>,
  ): RequestOptions<BodyParams> {
    return {
      ...options,
      headers: { ...this.defaultHeaders, ...options.headers },
    }
  }

  public buildURL(endpoint: string, params?: RequestParams): string {
    return UrlBuilder.build(this.baseURL, endpoint, params)
  }

  public get<ResponseType, BodyParams>(
    endpoint: string,
    options?: RequestOptions<BodyParams>,
  ): Promise<ResponseType> {
    const url = this.buildURL(endpoint, options?.params)
    return this.httpClient.request(
      url,
      this.buildRequestOptions({ method: 'GET', ...options }),
    )
  }

  public post<ResponseType, BodyParams>(
    endpoint: string,
    options?: RequestOptions<BodyParams>,
  ): Promise<ResponseType> {
    const url = this.buildURL(endpoint, options?.params)
    return this.httpClient.request(
      url,
      this.buildRequestOptions({ method: 'POST', ...options }),
    )
  }

  public patch<ResponseType, BodyParams>(
    endpoint: string,
    options?: RequestOptions<BodyParams>,
  ): Promise<ResponseType> {
    const url = this.buildURL(endpoint, options?.params)
    return this.httpClient.request(
      url,
      this.buildRequestOptions({ method: 'PATCH', ...options }),
    )
  }

  public put<ResponseType, BodyParams>(
    endpoint: string,
    options?: RequestOptions<BodyParams>,
  ): Promise<ResponseType> {
    const url = this.buildURL(endpoint, options?.params)
    return this.httpClient.request(
      url,
      this.buildRequestOptions({ method: 'PATCH', ...options }),
    )
  }

  public delete<ResponseType, BodyParams>(
    endpoint: string,
    options?: RequestOptions<BodyParams>,
  ): Promise<ResponseType> {
    const url = this.buildURL(endpoint, options?.params)
    return this.httpClient.request(
      url,
      this.buildRequestOptions({ method: 'DELETE', ...options }),
    )
  }
}
