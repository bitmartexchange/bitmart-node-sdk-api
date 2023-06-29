'use strict'

const BitMartError = require('./error')

class BitMartMissingKeyError extends BitMartError {
  constructor (message) {
    super(`api key missing: ${message}`)
    this.name = 'BitMartMissingKeyError'
  }
}

module.exports = BitMartMissingKeyError
