'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Futures Sub-Account Endpoints
 *
 * NOTE: Per the API docs these endpoints are served from the account host
 * `https://api-cloud.bitmart.com`. BitmartFuturesAPI defaults to
 * `https://api-cloud-v2.bitmart.com`; if these calls fail on the default host,
 * construct BitmartFuturesAPI with `baseURL: 'https://api-cloud.bitmart.com'`.
 *
 * @module FuturesSubAccount
 * @param {*} superclass
 */
const FuturesSubAccount = superclass => class extends superclass {

    /**
     * Sub-Account to Main-Account (For Main Account) (SIGNED) <br>
     * POST /account/contract/sub-account/main/v1/sub-to-main <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-sub/sub-to-main}
     *
     * @param {String} requestNo - UUID or other unique identifier, length up to 64
     * @param {String} amount - Transfer amount
     * @param {String} currency - Currency (currently only USDT is supported)
     * @param {String} subAccount - Sub-account username
     * @returns {JSON} Object
     */
    subToMainForMainAccount(requestNo, amount, currency, subAccount, options = {}) {
        validateRequiredParameters({ requestNo, amount, currency, subAccount })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/account/contract/sub-account/main/v1/sub-to-main',
            Object.assign(options, {
                requestNo: requestNo,
                amount: amount,
                currency: currency,
                subAccount: subAccount
            })
        )
    }

    /**
     * Main-Account to Sub-Account (For Main Account) (SIGNED) <br>
     * POST /account/contract/sub-account/main/v1/main-to-sub <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-sub/main-to-sub}
     *
     * @param {String} requestNo - UUID or other unique identifier, length up to 64
     * @param {String} amount - Transfer amount
     * @param {String} currency - Currency (currently only USDT is supported)
     * @param {String} subAccount - Sub-account username
     * @returns {JSON} Object
     */
    mainToSubForMainAccount(requestNo, amount, currency, subAccount, options = {}) {
        validateRequiredParameters({ requestNo, amount, currency, subAccount })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/account/contract/sub-account/main/v1/main-to-sub',
            Object.assign(options, {
                requestNo: requestNo,
                amount: amount,
                currency: currency,
                subAccount: subAccount
            })
        )
    }

    /**
     * Sub-Account to Main-Account (For Sub-Account) (SIGNED) <br>
     * POST /account/contract/sub-account/sub/v1/sub-to-main <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-sub/sub-to-main-sub}
     *
     * @param {String} requestNo - UUID or other unique identifier, length up to 64
     * @param {String} amount - Transfer amount
     * @param {String} currency - Currency (currently only USDT is supported)
     * @returns {JSON} Object
     */
    subToMainForSubAccount(requestNo, amount, currency, options = {}) {
        validateRequiredParameters({ requestNo, amount, currency })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/account/contract/sub-account/sub/v1/sub-to-main',
            Object.assign(options, {
                requestNo: requestNo,
                amount: amount,
                currency: currency
            })
        )
    }

    /**
     * Get Sub-Account Contract Wallet Balance (For Main Account) (KEYED) <br>
     * GET /account/contract/sub-account/main/v1/wallet <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-sub/wallet}
     *
     * @param {String} subAccount - Sub-account username
     * @param {String} options.currency - Currency
     * @returns {JSON} Object
     */
    getSubContractWallet(subAccount, options = {}) {
        validateRequiredParameters({ subAccount })

        return this.request(
            Auth.KEYED,
            'GET',
            '/account/contract/sub-account/main/v1/wallet',
            Object.assign(options, {
                subAccount: subAccount
            })
        )
    }

    /**
     * Get Sub-Account Transfer History (For Main Account) (KEYED) <br>
     * GET /account/contract/sub-account/main/v1/transfer-list <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-sub/transfer-list}
     *
     * @param {String} subAccount - Sub-account username
     * @param {Number} limit - The most recent N records (range 1-100)
     * @returns {JSON} Object
     */
    getSubTransferList(subAccount, limit, options = {}) {
        validateRequiredParameters({ subAccount, limit })

        return this.request(
            Auth.KEYED,
            'GET',
            '/account/contract/sub-account/main/v1/transfer-list',
            Object.assign(options, {
                subAccount: subAccount,
                limit: limit
            })
        )
    }

    /**
     * Get Account Transfer History (For Main and Sub-Account) (KEYED) <br>
     * GET /account/contract/sub-account/v1/transfer-history <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-sub/transfer-history}
     *
     * @param {Number} limit - The most recent N records (range 1-100)
     * @returns {JSON} Object
     */
    getAccountTransferHistory(limit, options = {}) {
        validateRequiredParameters({ limit })

        return this.request(
            Auth.KEYED,
            'GET',
            '/account/contract/sub-account/v1/transfer-history',
            Object.assign(options, {
                limit: limit
            })
        )
    }
}

module.exports = FuturesSubAccount
