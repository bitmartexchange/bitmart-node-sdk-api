'use strict'

const BitmartFuturesAPI = require('../../../src/bitmartFuturesAPI')
const { yourApiKey, logger } = require('../../config')

const bitmartFuturesAPI = new BitmartFuturesAPI({
    apiKey: yourApiKey,
    logger: logger,
})


bitmartFuturesAPI.getAllCurrentPlanOrders({
    symbol: 'ETHUSDT',
    type: 'limit',
    limit: 10,
    plan_type: 'plan',
})
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
