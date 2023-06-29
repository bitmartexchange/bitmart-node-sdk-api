'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const yourApiKey = 'your api key'
const bitmartFuturesAPI = new BitmartFuturesAPI({
  apiKey: yourApiKey
})


bitmartFuturesAPI.getOrderHistory('ETHUSDT', {
    // start_time: 1662368173,
    // end_time: 1662368179
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
