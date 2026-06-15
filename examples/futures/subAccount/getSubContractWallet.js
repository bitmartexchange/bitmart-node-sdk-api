'use strict'

const BitMart = require('../../../src')
const { yourApiKey, logger } = require('../../config')

// NOTE: served from account host https://api-cloud.bitmart.com (see module note).
const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI({
  apiKey: yourApiKey,
  logger: logger,
})

bitmartFuturesAPI.getSubContractWallet('subAccountName', {
    // currency: 'USDT'
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
