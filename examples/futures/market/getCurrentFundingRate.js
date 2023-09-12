'use strict'

const BitMart = require('../../../src')


const bitmartFuturesAPI = new BitMart.BitmartFuturesAPI()


bitmartFuturesAPI.getCurrentFundingRate('BTCUSDT')
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))


