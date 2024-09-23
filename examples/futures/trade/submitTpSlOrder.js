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
