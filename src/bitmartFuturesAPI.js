'use strict'

const CloudApiClient = require('./lib/cloudApiClient')
const futuresModules = require('./modules/futures')
const { flowRight } = require('./lib/utils')

class BitmartFuturesAPI extends flowRight(...Object.values(futuresModules))(CloudApiClient) {

  constructor (options = {}) {
    options.baseURL = options.baseURL || 'https://api-cloud-v2.bitmart.com'
    super({
      ...options
    })
  }
}

module.exports = BitmartFuturesAPI
