'use strict'

const { createDefaultLogger } = require('../src/lib/utils')

const yourApiKey = 'your_api_key'
const yourApiSecret = 'your_api_secret'
const yourApiMemo = 'your_api_memo'

const debugEnabled = true
const logger = createDefaultLogger(debugEnabled)

module.exports = {
  yourApiKey,
  yourApiSecret,
  yourApiMemo,
  logger,
  debugEnabled
}

