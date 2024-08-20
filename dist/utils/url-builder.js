"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlBuilder = void 0;
class UrlBuilder {
    static build(baseURL, endpoint, params) {
        const url = new URL(`${baseURL}${endpoint}`);
        if (params) {
            Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])));
        }
        return url.toString();
    }
}
exports.UrlBuilder = UrlBuilder;
