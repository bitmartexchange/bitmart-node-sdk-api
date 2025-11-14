'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')

const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
    logger: logger,
})

bitmartFuturesAPI.submitTpSlOrder('ETHUSDT', "take_profit", 2, "2000", "1450", 1, {
    size: 10,
    plan_category: 1,
    client_order_id: "12312312312",
    category: "limit",
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
