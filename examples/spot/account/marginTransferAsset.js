'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')

const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'

const bitmartSpotAPI = new BitmartSpotAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo
})


bitmartSpotAPI.marginTransferAsset('BTC_USDT', 'BTC', '10', 'in')
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
