'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')
const bitmartSpotAPI = new BitMart.BitmartSpotAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartSpotAPI.newSpotAlgoOrder('BTC_USDT', 'buy', 'trigger', {
    client_order_id: 'algo1121212',
    trigger_price: '50000',
    trigger_type: 'Limit',
    price: '49000',
    size: '0.01'
}).then(response => bitmartSpotAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartSpotAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartSpotAPI.logger.log(error.request);
        } else {
            bitmartSpotAPI.logger.log('Error', error.message);
        }
    });
