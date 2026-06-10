'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const { yourApiKey } = require('../../config')
const bitmartFuturesAPI = new BitmartFuturesAPI({
  apiKey: yourApiKey
})


bitmartFuturesAPI.getAutoRepayment({
    // start_time: 1770739200,
    // end_time: 1771257600,
    page: 1,
    size: 100,
    from_coin_code: 'USDT'
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
