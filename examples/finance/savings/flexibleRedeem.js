'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')
const bitmartFinanceAPI = new BitMart.BitmartFinanceAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartFinanceAPI.flexibleRedeem('200001', '50', '20000009000000300001')
  .then(response => bitmartFinanceAPI.logger.log(response.data))
  .catch(error => bitmartFinanceAPI.logger.log(error))
