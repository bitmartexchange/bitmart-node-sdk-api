'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')

const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo,
    logger: logger,
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
