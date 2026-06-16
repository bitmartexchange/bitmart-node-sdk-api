'use strict'

const BitMart = require('../../../src')
const { yourApiKey, logger } = require('../../config')
const bitmartFinanceAPI = new BitMart.BitmartFinanceAPI({
  apiKey: yourApiKey,
  logger: logger,
})

bitmartFinanceAPI.getFixedRecords('subscribe', 1, 10, {
    // startTime: 1681701557927,
    // endTime: 1681701557927,
    // coinName: 'USDT'
})
  .then(response => bitmartFinanceAPI.logger.log(response.data))
  .catch(error => bitmartFinanceAPI.logger.log(error))
