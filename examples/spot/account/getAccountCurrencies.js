'use strict'


const BitMart = require('../../../src')
const { logger } = require('../../config')
const bitmartSpotAPI = new BitMart.BitmartSpotAPI({
    logger: logger,
})


bitmartSpotAPI.getAccountCurrencies({
    currencies: 'BTC,ETH,USDT'
})
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))
