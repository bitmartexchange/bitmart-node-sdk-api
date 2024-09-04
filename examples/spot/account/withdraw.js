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

// Withdraw to the blockchain
bitmartSpotAPI.withdraw('USDT-TRC20', '0.001', {
    address:'0x1EE6FA5A3803608fc22a1f3F76',
    address_memo:'',
    destination:'To Digital Address'
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))



//  Withdraw to BitMart account
bitmartSpotAPI.withdraw('USDT-TRC20', '0.001', {
  type:1,
  value:'123424',
  areaCode:''
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
