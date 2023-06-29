'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const yourApiKey = 'your api key'
const bitmartSpotAPI = new BitmartSpotAPI({
    apiKey: yourApiKey
})

bitmartSpotAPI.getIsolatedBorrowRecord('BTC_USDT', {
    N: 10
})
.then(response => bitmartSpotAPI.logger.log(response.data))
.catch(error => bitmartSpotAPI.logger.log(error))

