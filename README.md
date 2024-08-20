# @gildembergleite/fetch-kit

![npm](https://img.shields.io/npm/v/@gildembergleite/fetch-kit)
![npm bundle size](https://img.shields.io/bundlephobia/min/@gildembergleite/fetch-kit)
![npm](https://img.shields.io/npm/dt/@gildembergleite/fetch-kit)

A TypeScript library for building and managing HTTP requests with ease. This library provides a flexible and extensible way to interact with APIs using a `BaseApi` class and customizable `HttpClient` implementations.

## Features

- Simple and flexible API for making HTTP requests (GET, POST, PATCH, DELETE).
- Customizable HTTP client (default is `fetch`).
- URL construction with query parameters.
- Default headers management.
- Error handling for HTTP requests.

## Installation

You can install the library via npm:

```bash
npm install @gildembergleite/fetch-kit
```

## Usage

### Basic Setup

Here’s how you can set up and use the `BaseApi` class with the default `FetchHttpClient`:

```typescript
import { BaseApi } from '@gildembergleite/fetch-kit';
import { FetchHttpClient } from '@gildembergleite/fetch-kit';

const api = new BaseApi({
  baseURL: 'https://api.example.com',
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
  httpClient: new FetchHttpClient(),
});

// Making a GET request
api.get('/endpoint').then(response => {
  console.log(response);
}).catch(error => {
  console.error('Request failed', error);
});

// Making a POST request
api.post('/endpoint', {
  body: { key: 'value' },
}).then(response => {
  console.log(response);
}).catch(error => {
  console.error('Request failed', error);
});
```

### Available Methods

The `BaseApi` class provides the following methods for making HTTP requests:

- **`get<T>(endpoint: string, options?: RequestOptions): Promise<T>`**: Makes a GET request to the specified endpoint.
- **`post<T>(endpoint: string, options?: RequestOptions): Promise<T>`**: Makes a POST request to the specified endpoint.
- **`patch<T>(endpoint: string, options?: RequestOptions): Promise<T>`**: Makes a PATCH request to the specified endpoint.
- **`delete<T>(endpoint: string, options?: RequestOptions): Promise<T>`**: Makes a DELETE request to the specified endpoint.

### URL Parameters

You can pass query parameters to the `get`, `post`, `patch`, and `delete` methods using the `params` option:

```typescript
api.get('/endpoint', {
  params: { search: 'query', page: 1 }
}).then(response => {
  console.log(response);
});
```

### Custom HTTP Client

By default, the library uses the native `fetch` API, but you can implement and use your own HTTP client by following the `HttpClient` interface:

```typescript
import { HttpClient, RequestOptions } from '@gildembergleite/fetch-kit';

class CustomHttpClient implements HttpClient {
  async request<T>(url: string, options: RequestOptions): Promise<T> {
    // Custom implementation here
    return fetch(url, {
      method: options.method || 'GET',
      headers: options.headers,
      body: options.body ? JSON.stringify(options.body) : null,
    }).then(response => response.json());
  }
}

const api = new BaseApi({
  baseURL: 'https://api.example.com',
  httpClient: new CustomHttpClient(),
});
```

## Error Handling

The `BaseApi` class automatically handles non-2xx HTTP responses by throwing an error. You can catch these errors using a `try-catch` block or the `catch` method on the returned `Promise`:

```typescript
try {
  const response = await api.get('/endpoint');
  console.log(response);
} catch (error) {
  console.error('Request failed', error);
}
```

## Testing

This library includes unit tests for all core functionalities. To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.