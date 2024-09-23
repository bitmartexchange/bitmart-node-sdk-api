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

bitmartFuturesAPI.modifyPresetPlanOrder('ETHUSDT', '220609666322019', {
    preset_take_profit_price:"2000",
    preset_stop_loss_price:"1900",
    preset_take_profit_price_type:1,
    preset_stop_loss_price_type:1,
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
