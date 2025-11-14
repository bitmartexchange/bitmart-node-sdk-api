'use strict'

const BitMart = require('../../../src')
const { yourApiKey, logger } = require('../../config')
const bitmartSpotAPI = new BitMart.BitmartSpotAPI({
  apiKey: yourApiKey,
  logger: logger,
})


const endTime = Date.now()
const startTime = endTime - 24 * 60 * 60 * 1000 // a day ago

bitmartSpotAPI.getDepositAndWithdrawHistory('withdraw', 10, {
    currency: "BTC",
    startTime: startTime,
    endTime: endTime
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
