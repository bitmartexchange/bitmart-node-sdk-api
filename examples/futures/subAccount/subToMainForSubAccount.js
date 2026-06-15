'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')

// NOTE: served from account host https://api-cloud.bitmart.com (see module note).
const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartFuturesAPI.subToMainForSubAccount('a1b2c3d4-0003', '10', 'USDT')
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
