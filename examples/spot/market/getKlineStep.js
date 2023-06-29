'use strict'

const BitmartSpotAPI = require('../../../src/bitmartSpotAPI')


const bitmartSpotAPI = new BitmartSpotAPI()


bitmartSpotAPI.getKlineStep()
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))


