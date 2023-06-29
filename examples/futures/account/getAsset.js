'use strict'

const BitmartFutuesAPI = require('../../../src/bitmartFuturesAPI')

const yourApiKey = 'your api key'

const bitmartFuturesAPI = new BitmartFutuesAPI({
  apiKey: yourApiKey
})


bitmartFuturesAPI.getAsset()
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))
