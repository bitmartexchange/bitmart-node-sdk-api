'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const {createDefaultLogger} = require("../../../src/lib/utils");

const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'
const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    logger: createDefaultLogger(true),
})


bitmartFuturesAPI.getAllCurrentPlanOrders({
    symbol: 'ETHUSDT',
    type: 'limit',
    limit: 10,
    plan_type: 'plan',
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
