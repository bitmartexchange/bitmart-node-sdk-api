'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const bitmartSpotAPI = new BitmartSpotAPI()

const to = Math.floor(Date.now() / 1000)
const from = to - 24 * 60 * 60


bitmartSpotAPI.getKline('BTC_USDT', from, to, {
    step: 15
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))


