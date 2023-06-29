'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Futures Account Data Endpoints
 * @module FuturesAccount
 * @param {*} superclass
 */
const FuturesAccount = superclass => class extends superclass {

    /**
      * Get Contract Assets (KEYED) <br>
      *
      * GET /contract/private/assets-detail <br>
      * 
      * {@link https://developer-pro.bitmart.com/en/futures/#get-contract-assets-keyed}
      */
    getAsset() {
        return this.request(Auth.KEYED, 'GET', '/contract/private/assets-detail')
    }
}

module.exports = FuturesAccount