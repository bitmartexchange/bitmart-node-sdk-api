'use strict'


const BitMart = require('../../../src')
const { logger } = require('../../config')
const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI({
    logger: logger,
})


bitmartFuturesAPI.getDepth('BTCUSDT')
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))


