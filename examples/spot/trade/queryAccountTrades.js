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


bitmartSpotAPI.queryAccountTrades({
    symbol: "BTC_USDT",
    orderMode: "spot",
    startTime: 1682239652931,
    endTime: 1682239657931,
    limit: 10,
    recvWindow: 5000
}).then(response => bitmartSpotAPI.logger.log(response.data))
    .catch(error => bitmartSpotAPI.logger.log(error));
