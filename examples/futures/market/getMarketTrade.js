'use strict'

const BitMart = require('../../../src')
const { logger } = require('../../config')
const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI({
    logger: logger,
})


bitmartFuturesAPI.getMarketTrade('BTCUSDT')
.then(response => bitmartFuturesAPI.logger.log(response.data))
.catch(error => bitmartFuturesAPI.logger.log(error))



bitmartFuturesAPI.getMarketTrade('BTCUSDT', {
  limit: 2
})
.then(response => bitmartFuturesAPI.logger.log(response.data))
.catch(error => bitmartFuturesAPI.logger.log(error))