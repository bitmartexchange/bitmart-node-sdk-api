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

bitmartFuturesAPI.cancelPlanOrder("ETHUSDT","230628411638903")
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

