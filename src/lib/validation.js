'use strict'

const { isEmptyValue } = require('./utils')
const BitMartMissingParameterError = require('../error/missingParameterError')

const validateRequiredParameters = paramObject => {
  if (!paramObject || isEmptyValue(paramObject)) { throw new BitMartMissingParameterError() }
  const emptyParams = []
  Object.keys(paramObject).forEach(param => {
    if (isEmptyValue(paramObject[param])) {
      emptyParams.push(param)
    }
  })
  if (emptyParams.length) { throw new BitMartMissingParameterError(emptyParams) }
}

const hasOneOfParameters = paramObject => {
  if (!paramObject || isEmptyValue(paramObject)) { throw new BitMartMissingParameterError() }
  const params = Object.values(paramObject)
  if (params.every(isEmptyValue)) {
    throw new BitMartMissingParameterError(Object.keys(paramObject))
  }
}

module.exports = {
  validateRequiredParameters,
  hasOneOfParameters
}
