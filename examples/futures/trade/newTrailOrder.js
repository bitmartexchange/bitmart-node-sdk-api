'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const {createDefaultLogger} = require("../../../src/lib/utils");

const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'
const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
    logger: createDefaultLogger(true),
})

bitmartFuturesAPI.newTrailOrder({
    symbol: 'BTCUSDT',
    side: 1,
    leverage: '80',
    open_type: 'isolated',
    size: 2,
    activation_price: '12000',
    callback_rate: '2',
    activation_price_type: 1,
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
