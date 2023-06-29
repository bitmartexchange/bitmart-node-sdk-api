'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')


const bitmartFuturesAPI = new BitmartFuturesAPI()


bitmartFuturesAPI.getDetails({
    symbol: 'BTCUSDT'
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))


