'use strict'

const { removeEmptyValue, buildQueryString, createRequest, createSign, createDefaultLogger, Auth } = require('../lib/utils')
const constants = require('../lib/constants')

class CloudApiClient {
  constructor (options) {
    const { apiKey, apiSecret, apiMemo, baseURL, logger, timeout, headers = {} } = options

    this.apiKey = apiKey
    this.apiSecret = apiSecret
    this.apiMemo = apiMemo
    this.baseURL = baseURL
    this.timeout = timeout || 5000
    this.headers = headers
    this.logger = logger || createDefaultLogger(false)
  }

  request (auth, method, path, params = {}) {
    params = removeEmptyValue(params)

    var body = '';
    if(method === "GET") {
      if (Object.keys(params).length !== 0) {
        path = `${path}?${buildQueryString(params)}`
      }
    } else {
      body = JSON.stringify(params)
    }
    
    // Set header
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': `bitmart-node-sdk-api/${constants.appVersion}`
    };

    // Set Custom header
    if (this.headers && typeof this.headers === 'object') {
      Object.assign(headers, this.headers )
    }

    if(auth === Auth.KEYED) {
      headers['X-BM-KEY'] = this.apiKey;
    } else if(auth === Auth.SIGNED) {
      const timestamp = Date.now()
      headers['X-BM-KEY'] = this.apiKey;
      headers['X-BM-TIMESTAMP'] = timestamp;
      headers['X-BM-SIGN'] = createSign(timestamp, body, this.apiSecret, this.apiMemo);
    }

    return createRequest({
      logger: this.logger,
      method,
      baseURL: this.baseURL,
      url: path,
      headers: headers,
      timeout: this.timeout,
      data: body
    })
  }

}

module.exports = CloudApiClient
