'use strict'

const BitMart = require('../../../src')
const { logger } = require('../../config')
const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI({
    logger: logger,
})


const endTime = Math.floor(Date.now() / 1000)
const startTime = endTime - 24 * 60 * 60
bitmartFuturesAPI.getMarkPriceKline('BTCUSDT', startTime, endTime, {
    step: 60
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))



