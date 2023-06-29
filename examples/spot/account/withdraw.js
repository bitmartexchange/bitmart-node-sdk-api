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


bitmartSpotAPI.withdraw('USDT-TRC20', '0.001', 'To Digital Address', '0x1EE6FA5A3803608fc22a1f3F76', {
    address_memo:''
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
