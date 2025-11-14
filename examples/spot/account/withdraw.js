'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')
const bitmartSpotAPI = new BitMart.BitmartSpotAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

// Withdraw to the blockchain
bitmartSpotAPI.withdraw('USDT-ETH', '10000000', {
    address:'0x1EE6FA5A3803608fc22a1f3F76',
    address_memo:'',
    destination:'To Digital Address'
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => {
    if (error.response) {
      bitmartSpotAPI.logger.log(error.response.data);
    } else if (error.request) {
      bitmartSpotAPI.logger.log(error.request);
    } else {
      bitmartSpotAPI.logger.log('Error', error.message);
    }
})


//  Withdraw to BitMart account
bitmartSpotAPI.withdraw('USDT-TRX', '10000000', {
  type: 1,
  value: '123424',
  areaCode: ''
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => {
    if (error.response) {
      bitmartSpotAPI.logger.log(error.response.data);
    } else if (error.request) {
      bitmartSpotAPI.logger.log(error.request);
    } else {
      bitmartSpotAPI.logger.log('Error', error.message);
    }
  })









