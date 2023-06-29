'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'
const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
})


bitmartFuturesAPI.getTransferList(1, 10, {
    currency: 'USDT',
    // start_time: 1662368173, 
    // end_time: 1662368179
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
