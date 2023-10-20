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

bitmartSpotAPI.newSpotOrder('BTC_USDT', 'sell', 'limit', {
    client_order_id: 'xxxx1121212',
    size: 10000,
    price: "500000"
}).then(response => bitmartSpotAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartSpotAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartSpotAPI.logger.log(error.request);
        } else {
            bitmartSpotAPI.logger.log('Error', error.message);
        }
    });

