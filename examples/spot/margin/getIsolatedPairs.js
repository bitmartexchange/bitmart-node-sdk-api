'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const yourApiKey = 'your api key'
const bitmartSpotAPI = new BitmartSpotAPI({
    apiKey: yourApiKey
})

bitmartSpotAPI.getIsolatedPairs({
    symbol: 'BTC_USDT,ETH_USDT'
})
.then(response => bitmartSpotAPI.logger.log(response.data))
.catch(error => bitmartSpotAPI.logger.log(error))

