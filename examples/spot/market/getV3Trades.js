'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')

const bitmartSpotAPI = new BitmartSpotAPI()


bitmartSpotAPI.getV3Trades('BTC_USDT', {
  limit: 5
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))


