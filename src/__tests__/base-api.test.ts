import { BaseApi } from '../api/base-api'
import { FetchHttpClient } from '../api/fetch-http-client'
import { HttpClient } from '../interfaces/http-client'

describe('BaseApi', () => {
  let httpClient: HttpClient
  let baseApi: BaseApi

  beforeEach(() => {
    httpClient = new FetchHttpClient()
    baseApi = new BaseApi({
      baseURL: 'https://api.example.com',
      defaultHeaders: { 'Content-Type': 'application/json' },
      httpClient,
    })
  })

  it('should build URL with parameters', () => {
    const url = baseApi.buildURL('/endpoint', { query: 'test' })
    expect(url).toBe('https://api.example.com/endpoint?query=test')
  })

  it('should make a GET request', async () => {
    const mockResponse = { data: 'mocked' }
    const spy = jest
      .spyOn(httpClient, 'request')
      .mockResolvedValue(mockResponse)

    const response = await baseApi.get('/endpoint')

    expect(spy).toHaveBeenCalledWith('https://api.example.com/endpoint', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    expect(response).toEqual(mockResponse)
  })

  it('should make a POST request', async () => {
    const mockResponse = { data: 'mocked' }
    const spy = jest
      .spyOn(httpClient, 'request')
      .mockResolvedValue(mockResponse)

    const response = await baseApi.post('/endpoint', { body: { key: 'value' } })

    expect(spy).toHaveBeenCalledWith('https://api.example.com/endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { key: 'value' },
    })
    expect(response).toEqual(mockResponse)
  })

  it('should handle request errors', async () => {
    jest
      .spyOn(httpClient, 'request')
      .mockRejectedValue(new Error('Request failed'))

    await expect(baseApi.get('/error')).rejects.toThrow('Request failed')
  })
})

describe('FetchHttpClient', () => {
  let fetchHttpClient: FetchHttpClient

  beforeEach(() => {
    fetchHttpClient = new FetchHttpClient()
  })

  it('should make a fetch request', async () => {
    const mockResponse = new Response(JSON.stringify({ data: 'mocked' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
    global.fetch = jest.fn(() => Promise.resolve(mockResponse)) as jest.Mock

    const response = await fetchHttpClient.request(
      'https://api.example.com/endpoint',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/endpoint', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: null,
      cache: 'no-cache',
    })
    expect(response).toEqual({ data: 'mocked' })
  })

  it('should handle non-OK responses', async () => {
    const mockResponse = new Response('Not Found', { status: 404 })
    global.fetch = jest.fn(() => Promise.resolve(mockResponse)) as jest.Mock

    await expect(
      fetchHttpClient.request('https://api.example.com/404', { method: 'GET' }),
    ).rejects.toThrow('HTTP error! status: 404')
  })
})
