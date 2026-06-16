'use strict'


const { Auth } = require('../../lib/utils')

/**
 * Finance Assets Endpoints
 * @module FinanceAssets
 * @param {*} superclass
 */
const FinanceAssets = superclass => class extends superclass {

    /**
     * Get Savings Holdings (KEYED) <br>
     * GET /newearn/cloud/v1/earn <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-assets/query-savings-holdings}
     *
     * @returns {JSON} Object
     */
    getSavingsHoldings(options = {}) {
        return this.request(Auth.KEYED, 'GET', '/newearn/cloud/v1/earn', Object.assign(options))
    }
}

module.exports = FinanceAssets
