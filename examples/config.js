'use strict'

const fs = require('fs')
const path = require('path')
const { createDefaultLogger } = require('../src/lib/utils')

/**
 * Load key=value pairs from the project-root `.env` file (not committed to git).
 * Zero-dependency parser: skips blank lines and `#` comments, trims whitespace
 * and strips surrounding quotes. If `.env` is missing/unreadable, returns {}.
 */
function loadDotEnv () {
  const envPath = path.join(__dirname, '..', '.env')
  const result = {}
  try {
    const content = fs.readFileSync(envPath, 'utf8')
    content.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) return
      const eq = trimmed.indexOf('=')
      if (eq === -1) return
      const key = trimmed.slice(0, eq).trim()
      let value = trimmed.slice(eq + 1).trim()
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      if (key) result[key] = value
    })
  } catch (e) {
    // .env not present or unreadable — fall back to process.env / defaults
  }
  return result
}

const env = loadDotEnv()

// Priority: project-root .env file > process.env > placeholder default
const pick = (name, fallback) => env[name] || process.env[name] || fallback

const yourApiKey = pick('BITMART_API_KEY', 'your_api_key')
const yourApiSecret = pick('BITMART_SECRET_KEY', 'your_api_secret')
const yourApiMemo = pick('BITMART_MEMO', 'your_api_memo')
const apiURL = pick('BITMART_API_URL', '')

const debugEnabled = true
const logger = createDefaultLogger(debugEnabled)

module.exports = {
  yourApiKey,
  yourApiSecret,
  yourApiMemo,
  apiURL,
  logger,
  debugEnabled
}
