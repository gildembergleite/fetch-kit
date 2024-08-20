import { RequestHeaders } from './request-headers'
import { RequestParams } from './request-params'

export interface RequestOptions<BodyParams> {
  method?: string
  headers?: RequestHeaders
  body?: BodyParams
  params?: RequestParams
}
