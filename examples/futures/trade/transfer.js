'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const { yourApiKey, yourApiSecret, yourApiMemo } = require('../../config')
const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
})


bitmartFuturesAPI.transfer('USDT', '10', 'spot_to_contract', {
    recvWindow: 5000
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
