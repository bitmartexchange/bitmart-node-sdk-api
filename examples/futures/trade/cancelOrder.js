'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')

const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
    logger: logger,
})

bitmartFuturesAPI.cancelOrder("ETHUSDT", {
    order_id: "12312312312",
})
.then(response => bitmartFuturesAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartFuturesAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartFuturesAPI.logger.log(error.request);
        } else {
            bitmartFuturesAPI.logger.log('Error', error.message);
        }
    });


bitmartFuturesAPI.cancelOrder("ETHUSDT", {
    client_order_id: "12312312312",
})
    .then(response => bitmartFuturesAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartFuturesAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartFuturesAPI.logger.log(error.request);
        } else {
            bitmartFuturesAPI.logger.log('Error', error.message);
        }
    });