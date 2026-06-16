'use strict'

const CloudApiClient = require('./lib/cloudApiClient')
const financeModules = require('./modules/finance')
const { flowRight } = require('./lib/utils')

class BitmartFinanceAPI extends flowRight(...Object.values(financeModules))(CloudApiClient) {

  constructor (options = {}) {
    options.baseURL = options.baseURL || 'https://api-cloud.bitmart.com'
    super({
      ...options
    })
  }
}

module.exports = BitmartFinanceAPI
