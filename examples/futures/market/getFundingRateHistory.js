'use strict'


const BitMart = require('../../../src')
const { logger } = require('../../config')
const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI({
    logger: logger,
})


bitmartFuturesAPI.getFundingRateHistory('BTCUSDT')
    .then(response => bitmartFuturesAPI.logger.log(response.data))
    .catch(error => bitmartFuturesAPI.logger.log(error))


bitmartFuturesAPI.getFundingRateHistory('BTCUSDT', {
    limit: 10
}).then(response => bitmartFuturesAPI.logger.log(response.data))
    .catch(error => bitmartFuturesAPI.logger.log(error))

