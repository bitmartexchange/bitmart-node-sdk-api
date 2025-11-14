'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')

const { yourApiKey } = require('../../config')
const bitmartFuturesAPI = new BitmartFuturesAPI({
  apiKey: yourApiKey
})


bitmartFuturesAPI.getOrderHistory('ETHUSDT', {
    account: 'futures',
    // order_id: '230628411614714',
    // client_order_id: 'BM12344444',
    // start_time: 1662368173,
    // end_time: 1662368179
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
