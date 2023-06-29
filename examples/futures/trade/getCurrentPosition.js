'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const yourApiKey = 'your api key'
const bitmartFuturesAPI = new BitmartFuturesAPI({
  apiKey: yourApiKey
})


bitmartFuturesAPI.getCurrentPosition({
    symbol: 'ETHUSDT'
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
