'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Finance Flexible Savings Endpoints
 * @module FinanceSavings
 * @param {*} superclass
 */
const FinanceSavings = superclass => class extends superclass {

    /**
     * Get Flexible Savings Product List (KEYED) <br>
     * GET /newearn/cloud/v1/saving/product <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-earn/query-product-list}
     *
     * @param {Number} currentPage - Current page number
     * @param {Number} sizePage - Records per page, max 100
     * @param {String} options.coinName - Filter by currency name (e.g. USDT)
     * @returns {JSON} Object
     */
    getFlexibleProducts(currentPage, sizePage, options = {}) {
        validateRequiredParameters({ currentPage, sizePage })

        return this.request(
            Auth.KEYED,
            'GET',
            '/newearn/cloud/v1/saving/product',
            Object.assign(options, {
                currentPage: currentPage,
                sizePage: sizePage
            })
        )
    }

    /**
     * Flexible Savings Subscribe (SIGNED) <br>
     * POST /newearn/cloud/v1/saving/subscribe <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-earn/subscribe}
     *
     * @param {String} productId - Product ID
     * @param {String} amount - Subscribe amount
     * @param {String} requestNo - Unique request number, 20-digit numeric, for idempotency
     * @returns {JSON} Object
     */
    flexibleSubscribe(productId, amount, requestNo, options = {}) {
        validateRequiredParameters({ productId, amount, requestNo })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/newearn/cloud/v1/saving/subscribe',
            Object.assign(options, {
                productId: productId,
                amount: amount,
                requestNo: requestNo
            })
        )
    }

    /**
     * Flexible Savings Redeem (SIGNED) <br>
     * POST /newearn/cloud/v1/saving/redeem <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-earn/redeem}
     *
     * @param {String} earnId - Savings order ID
     * @param {String} amount - Redeem amount
     * @param {String} requestNo - Unique request number, 20-digit numeric, for idempotency
     * @returns {JSON} Object
     */
    flexibleRedeem(earnId, amount, requestNo, options = {}) {
        validateRequiredParameters({ earnId, amount, requestNo })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/newearn/cloud/v1/saving/redeem',
            Object.assign(options, {
                earnId: earnId,
                amount: amount,
                requestNo: requestNo
            })
        )
    }

    /**
     * Get Flexible Savings Holdings (KEYED) <br>
     * GET /newearn/cloud/v1/saving/earn <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-earn/query-holdings}
     *
     * @param {Number} currentPage - Current page number
     * @param {Number} sizePage - Records per page, max 100
     * @param {String} options.coinName - Filter by currency name (e.g. USDT)
     * @param {String} options.productId - Filter by product ID
     * @returns {JSON} Object
     */
    getFlexibleHoldings(currentPage, sizePage, options = {}) {
        validateRequiredParameters({ currentPage, sizePage })

        return this.request(
            Auth.KEYED,
            'GET',
            '/newearn/cloud/v1/saving/earn',
            Object.assign(options, {
                currentPage: currentPage,
                sizePage: sizePage
            })
        )
    }

    /**
     * Get Flexible Savings History Records (KEYED) <br>
     * GET /newearn/cloud/v1/saving/record <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-earn/query-history-records}
     *
     * @param {String} type - Record type (subscribe/redeem/interest)
     * @param {Number} currentPage - Current page number
     * @param {Number} sizePage - Records per page, max 100
     * @param {Number} options.startTime - Start time in milliseconds
     * @param {Number} options.endTime - End time in milliseconds
     * @param {String} options.coinName - Filter by currency name (e.g. USDT)
     * @returns {JSON} Object
     */
    getFlexibleRecords(type, currentPage, sizePage, options = {}) {
        validateRequiredParameters({ type, currentPage, sizePage })

        return this.request(
            Auth.KEYED,
            'GET',
            '/newearn/cloud/v1/saving/record',
            Object.assign(options, {
                type: type,
                currentPage: currentPage,
                sizePage: sizePage
            })
        )
    }
}

module.exports = FinanceSavings
