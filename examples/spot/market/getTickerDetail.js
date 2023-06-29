'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')

const bitmartSpotAPI = new BitmartSpotAPI()

bitmartSpotAPI.getTickerDetail('BTC_USDT')
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))


