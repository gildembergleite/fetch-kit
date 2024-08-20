"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApi = void 0;
const url_builder_1 = require("../utils/url-builder");
class BaseApi {
    constructor({ baseURL, defaultHeaders = {}, httpClient, }) {
        this.baseURL = baseURL;
        this.defaultHeaders = defaultHeaders;
        this.httpClient = httpClient;
    }
    buildRequestOptions(options) {
        return Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, this.defaultHeaders), options.headers) });
    }
    buildURL(endpoint, params) {
        return url_builder_1.UrlBuilder.build(this.baseURL, endpoint, params);
    }
    get(endpoint, options) {
        const url = this.buildURL(endpoint, options === null || options === void 0 ? void 0 : options.params);
        return this.httpClient.request(url, this.buildRequestOptions(Object.assign({ method: 'GET' }, options)));
    }
    post(endpoint, options) {
        const url = this.buildURL(endpoint, options === null || options === void 0 ? void 0 : options.params);
        return this.httpClient.request(url, this.buildRequestOptions(Object.assign({ method: 'POST' }, options)));
    }
    patch(endpoint, options) {
        const url = this.buildURL(endpoint, options === null || options === void 0 ? void 0 : options.params);
        return this.httpClient.request(url, this.buildRequestOptions(Object.assign({ method: 'PATCH' }, options)));
    }
    put(endpoint, options) {
        const url = this.buildURL(endpoint, options === null || options === void 0 ? void 0 : options.params);
        return this.httpClient.request(url, this.buildRequestOptions(Object.assign({ method: 'PATCH' }, options)));
    }
    delete(endpoint, options) {
        const url = this.buildURL(endpoint, options === null || options === void 0 ? void 0 : options.params);
        return this.httpClient.request(url, this.buildRequestOptions(Object.assign({ method: 'DELETE' }, options)));
    }
}
exports.BaseApi = BaseApi;
