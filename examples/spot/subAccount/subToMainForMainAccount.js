'use strict'

const BitMart = require('../../../src')
const { yourApiKey, yourApiSecret, yourApiMemo, logger } = require('../../config')
const bitmartSpotAPI = new BitMart.BitmartSpotAPI({
  apiKey: yourApiKey,
  apiSecret: yourApiSecret,
  apiMemo: yourApiMemo,
  logger: logger,
})

bitmartSpotAPI.subToMainForMainAccount('a1b2c3d4-0001', '10', 'USDT', 'subAccountName')
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
