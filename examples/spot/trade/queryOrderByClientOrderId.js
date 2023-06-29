'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'
const bitmartSpotAPI = new BitmartSpotAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
})


bitmartSpotAPI.queryOrderByClientOrderId('118100034543076010', {
    queryState: 'open',
    recvWindow: 50000
}).then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error));
