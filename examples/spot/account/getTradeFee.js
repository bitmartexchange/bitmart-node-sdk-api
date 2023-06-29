'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')

const yourApiKey = 'your api key'
const bitmartSpotAPI = new BitmartSpotAPI({
  apiKey: yourApiKey
})


bitmartSpotAPI.getTradeFee('BMX_USDT')
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
