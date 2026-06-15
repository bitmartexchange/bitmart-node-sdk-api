'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')

// NOTE: Per the API docs these sub-account endpoints are served from the account
// host https://api-cloud.bitmart.com. If the default futures host fails, pass
// baseURL: 'https://api-cloud.bitmart.com'.
const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartFuturesAPI.subToMainForMainAccount('a1b2c3d4-0001', '10', 'USDT', 'subAccountName')
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
