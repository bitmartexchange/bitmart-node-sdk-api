'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')


const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'
const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
})

bitmartFuturesAPI.newPlanOrder({
    symbol: "ETHUSDT",
    side: 4,
    mode: 1,
    type: "limit",
    leverage: "1",
    open_type: "isolated",
    size: 10,
    trigger_price: "2000",
    executive_price: "1450",
    price_type: 1,
    price_way: 1
}).then(response => bitmartFuturesAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartFuturesAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartFuturesAPI.logger.log(error.request);
        } else {
            bitmartFuturesAPI.logger.log('Error', error.message);
        }
    });

