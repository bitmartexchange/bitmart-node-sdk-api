'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const { yourApiKey, yourApiSecret, yourApiMemo } = require('../../config')

const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
})

bitmartFuturesAPI.newFuturesOrder({
    symbol: "ETHUSDT",
    client_order_id: "BM12344444",
    side: 4,
    mode: 1,
    type: "limit",
    leverage: "1",
    open_type: "isolated",
    size: 10,
    price: "2000",
    stp_mode: 1
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

