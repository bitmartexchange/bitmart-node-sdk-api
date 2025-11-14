'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const { yourApiKey } = require('../../config')

const bitmartFuturesAPI = new BitmartFuturesAPI({
  apiKey: yourApiKey
})


bitmartFuturesAPI.getOrderDetail('ETHUSDT', '230628411614714', {
    account: 'futures'
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
