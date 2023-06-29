'use strict'

const CloudApiClient = require('./lib/cloudApiClient')
const spotModules = require('./modules/spot')
const { flowRight } = require('./lib/utils')

class BitmartSpotAPI extends flowRight(...Object.values(spotModules))(CloudApiClient) {

  constructor (options = {}) {
    options.baseURL = options.baseURL || 'https://api-cloud.bitmart.com'
    super({
      ...options
    })
  }
}

module.exports = BitmartSpotAPI
