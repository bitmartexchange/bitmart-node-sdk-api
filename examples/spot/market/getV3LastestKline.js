'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const bitmartSpotAPI = new BitmartSpotAPI()

const before = Math.floor(Date.now() / 1000)
const after = before - 60 * 60


bitmartSpotAPI.getV3LatestKline('BTC_USDT', {
  before: before,
  after: after,
  step: 1,
  limit: 100,
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))


