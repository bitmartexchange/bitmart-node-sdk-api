'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const yourApiKey = 'your api key'
const bitmartFuturesAPI = new BitmartFuturesAPI({
  apiKey: yourApiKey,
})


bitmartFuturesAPI.getTransactionHistory({
    symbol: 'BTCUSDT',
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
