'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')
const bitmartSpotAPI = new BitMart.BitmartSpotAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartSpotAPI.subToMainForSubAccount('a1b2c3d4-0002', '10', 'USDT')
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
