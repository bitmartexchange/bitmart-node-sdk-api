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

bitmartFuturesAPI.modifyPlanOrder('ETHUSDT', "2000", 1, "limit", {
    client_order_id: "12312312312",
    executive_price: "1450",
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
