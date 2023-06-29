'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const yourApiKey = 'your api key'
const bitmartSpotAPI = new BitmartSpotAPI({
    apiKey: yourApiKey
})

bitmartSpotAPI.getIsolatedReplyRecord('BTC_USDT', {
    currency: 'BTC',
    N: 10
})
.then(response => bitmartSpotAPI.logger.log(response.data))
.catch(error => bitmartSpotAPI.logger.log(error))

