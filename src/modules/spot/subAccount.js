'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Spot Sub-Account Endpoints
 * @module SubAccount
 * @param {*} superclass
 */
const SubAccount = superclass => class extends superclass {

    /**
     * Sub-Account to Main-Account (For Main Account) (SIGNED) <br>
     * POST /account/sub-account/main/v1/sub-to-main <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/sub-to-main}
     *
     * @param {String} requestNo - UUID or other unique identifier, length up to 64
     * @param {String} amount - Transfer amount
     * @param {String} currency - Currency
     * @param {String} subAccount - Sub-account username
     * @returns {JSON} Object
     */
    subToMainForMainAccount(requestNo, amount, currency, subAccount, options = {}) {
        validateRequiredParameters({ requestNo, amount, currency, subAccount })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/account/sub-account/main/v1/sub-to-main',
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
     * POST /account/sub-account/sub/v1/sub-to-main <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/sub-to-main-sub}
     *
     * @param {String} requestNo - UUID or other unique identifier, length up to 64
     * @param {String} amount - Transfer amount
     * @param {String} currency - Currency
     * @returns {JSON} Object
     */
    subToMainForSubAccount(requestNo, amount, currency, options = {}) {
        validateRequiredParameters({ requestNo, amount, currency })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/account/sub-account/sub/v1/sub-to-main',
            Object.assign(options, {
                requestNo: requestNo,
                amount: amount,
                currency: currency
            })
        )
    }

    /**
     * Main-Account to Sub-Account (For Main Account) (SIGNED) <br>
     * POST /account/sub-account/main/v1/main-to-sub <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/main-to-sub}
     *
     * @param {String} requestNo - UUID or other unique identifier, length up to 64
     * @param {String} amount - Transfer amount
     * @param {String} currency - Currency
     * @param {String} subAccount - Sub-account username
     * @returns {JSON} Object
     */
    mainToSubForMainAccount(requestNo, amount, currency, subAccount, options = {}) {
        validateRequiredParameters({ requestNo, amount, currency, subAccount })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/account/sub-account/main/v1/main-to-sub',
            Object.assign(options, {
                requestNo: requestNo,
                amount: amount,
                currency: currency,
                subAccount: subAccount
            })
        )
    }

    /**
     * Sub-Account to Sub-Account (For Main Account) (SIGNED) <br>
     * POST /account/sub-account/main/v1/sub-to-sub <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/sub-to-sub}
     *
     * @param {String} requestNo - UUID or other unique identifier, length up to 64
     * @param {String} amount - Transfer amount
     * @param {String} currency - Currency
     * @param {String} fromAccount - Sub-account username to transfer out
     * @param {String} toAccount - Sub-account username to transfer in
     * @returns {JSON} Object
     */
    subToSubForMainAccount(requestNo, amount, currency, fromAccount, toAccount, options = {}) {
        validateRequiredParameters({ requestNo, amount, currency, fromAccount, toAccount })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/account/sub-account/main/v1/sub-to-sub',
            Object.assign(options, {
                requestNo: requestNo,
                amount: amount,
                currency: currency,
                fromAccount: fromAccount,
                toAccount: toAccount
            })
        )
    }

    /**
     * Get Sub-Account Transfer History (For Main Account) (KEYED) <br>
     * GET /account/sub-account/main/v1/transfer-list <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/transfer-list}
     *
     * @param {String} moveType - Transfer type (e.g. "spot to spot")
     * @param {Number} N - The most recent N records (range 1-100)
     * @param {String} options.accountName - Sub-account username (default: query all sub-accounts)
     * @returns {JSON} Object
     */
    getSubTransferList(moveType, N, options = {}) {
        validateRequiredParameters({ moveType, N })

        return this.request(
            Auth.KEYED,
            'GET',
            '/account/sub-account/main/v1/transfer-list',
            Object.assign(options, {
                moveType: moveType,
                N: N
            })
        )
    }

    /**
     * Get Account Transfer History (For Main and Sub-Account) (KEYED) <br>
     * GET /account/sub-account/v1/transfer-history <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/transfer-history}
     *
     * @param {String} moveType - Transfer type (e.g. "spot to spot")
     * @param {Number} N - The most recent N records (range 1-100)
     * @returns {JSON} Object
     */
    getAccountTransferHistory(moveType, N, options = {}) {
        validateRequiredParameters({ moveType, N })

        return this.request(
            Auth.KEYED,
            'GET',
            '/account/sub-account/v1/transfer-history',
            Object.assign(options, {
                moveType: moveType,
                N: N
            })
        )
    }

    /**
     * Get Sub-Account Spot Wallet Balance (For Main Account) (KEYED) <br>
     * GET /account/sub-account/main/v1/wallet <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/wallet}
     *
     * @param {String} subAccount - Sub-account username
     * @param {String} options.currency - Currency
     * @returns {JSON} Object
     */
    getSubSpotWallet(subAccount, options = {}) {
        validateRequiredParameters({ subAccount })

        return this.request(
            Auth.KEYED,
            'GET',
            '/account/sub-account/main/v1/wallet',
            Object.assign(options, {
                subAccount: subAccount
            })
        )
    }

    /**
     * Get Sub-Account List (For Main Account) (KEYED) <br>
     * GET /account/sub-account/main/v1/subaccount-list <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-sub/list}
     *
     * @returns {JSON} Object
     */
    getSubAccountList(options = {}) {
        return this.request(
            Auth.KEYED,
            'GET',
            '/account/sub-account/main/v1/subaccount-list',
            Object.assign(options)
        )
    }
}

module.exports = SubAccount
