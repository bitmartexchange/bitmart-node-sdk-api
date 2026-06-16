'use strict'

const BitMart = require('../../../src')
const { yourApiKey, logger } = require('../../config')
const bitmartFinanceAPI = new BitMart.BitmartFinanceAPI({
  apiKey: yourApiKey,
  logger: logger,
})

bitmartFinanceAPI.getFlexibleProducts(1, 10, {
    // coinName: 'USDT'
})
  .then(response => bitmartFinanceAPI.logger.log(response.data))
  .catch(error => bitmartFinanceAPI.logger.log(error))
