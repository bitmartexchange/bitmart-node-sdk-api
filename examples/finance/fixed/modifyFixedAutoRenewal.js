'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')
const bitmartFinanceAPI = new BitMart.BitmartFinanceAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartFinanceAPI.modifyFixedAutoRenewal('200001', 'REINVEST_FIXED')
  .then(response => bitmartFinanceAPI.logger.log(response.data))
  .catch(error => bitmartFinanceAPI.logger.log(error))
