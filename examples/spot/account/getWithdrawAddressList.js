'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')

const BitMart = require('../../../src')
const { yourApiKey, logger } = require('../../config')
const bitmartSpotAPI = new BitMart.BitmartSpotAPI({
  apiKey: yourApiKey,
  logger: logger,
})


bitmartSpotAPI.getWithdrawAddressList()
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))

