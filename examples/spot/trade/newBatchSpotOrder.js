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

const params = [{
    "size": "0.1",
    "price": "8800",
    "side": "buy",
    "type": "limit",
    "clientOrderId":"xxdfs23e232"
}, {
    "size": "0.1",
    "price": "8800",
    "side": "sell",
    "type": "limit",
    "clientOrderId":"xxdfs23e233"
}];

bitmartSpotAPI.v4NewBatchSpotOrder('BTC_USDT', params, {
    recvWindow: 5000
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
    });

