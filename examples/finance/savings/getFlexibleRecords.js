'use strict'

const BitMart = require('../../../src')
const { yourApiKey, logger } = require('../../config')
const bitmartFinanceAPI = new BitMart.BitmartFinanceAPI({
  apiKey: yourApiKey,
  logger: logger,
})

bitmartFinanceAPI.getFlexibleRecords('subscribe', 1, 10, {
    // startTime: 1714329600000,
    // endTime: 1714416000000,
    // coinName: 'USDT'
})
  .then(response => bitmartFinanceAPI.logger.log(response.data))
  .catch(error => bitmartFinanceAPI.logger.log(error))
