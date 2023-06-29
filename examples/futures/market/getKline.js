'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')


const bitmartFuturesAPI = new BitmartFuturesAPI()

const endTime = Math.floor(Date.now() / 1000)
const startTime = endTime - 24 * 60 * 60

console.info(startTime)


bitmartFuturesAPI.getKline('BTCUSDT', startTime, endTime, {
    step: 15
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))


