import { HttpClient } from '../interfaces/http-client'
import { RequestOptions } from '../interfaces/requests-options'

export class FetchHttpClient implements HttpClient {
  async request<ResponseType, BodyParams>(
    url: string,
    options: RequestOptions<BodyParams>,
  ): Promise<ResponseType> {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: options.headers,
      body: options.body ? JSON.stringify(options.body) : null,
    })

    return this.handleResponse(response)
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  }
}
