'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')
const bitmartFinanceAPI = new BitMart.BitmartFinanceAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartFinanceAPI.flexibleSubscribe('1001', '100', '20000009000000300000')
  .then(response => bitmartFinanceAPI.logger.log(response.data))
  .catch(error => bitmartFinanceAPI.logger.log(error))
