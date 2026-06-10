'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const { yourApiKey } = require('../../config')
const bitmartFuturesAPI = new BitmartFuturesAPI({
  apiKey: yourApiKey
})


bitmartFuturesAPI.getAffiliateRebateApi(123456, 1731859200, 1737043200)
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
