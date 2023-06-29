'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const bitmartSpotAPI = new BitmartSpotAPI()


bitmartSpotAPI.getDepth('BTC_USDT', {
    precision: -1,
    size: 2
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))


