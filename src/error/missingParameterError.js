'use strict'

const BitMartError = require('./error')

class BitMartMissingParameterError extends BitMartError {
  constructor (paramNames) {
    super(`One or more of required parameters is missing: ${paramNames ? paramNames.slice().join(', ') : ''} `)
    this.name = 'BitMartMissingParameterError'
  }
}

module.exports = BitMartMissingParameterError
