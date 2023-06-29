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

const params = { 'order_params' : [{
    "symbol": "BTC_USDT",
    "size": "0.1",
    "price": "8800",
    "side": "buy",
    "type": "limit"
}, {
    "symbol": "BTC_USDT",
    "size": "0.1",
    "price": "8800",
    "side": "sell",
    "type": "limit"
}
]};

bitmartSpotAPI.newBatchSpotOrder(params).then(response => bitmartSpotAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartSpotAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartSpotAPI.logger.log(error.request);
        } else {
            bitmartSpotAPI.logger.log('Error', error.message);
        }
    });

