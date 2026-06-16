'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Finance Fixed Savings Endpoints
 * @module FinanceFixed
 * @param {*} superclass
 */
const FinanceFixed = superclass => class extends superclass {

    /**
     * Get Fixed Savings Product List (KEYED) <br>
     * GET /newearn/cloud/v1/saving/fixed/product <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-fixed/query-product-list}
     *
     * @param {Number} currentPage - Current page number, default 1
     * @param {Number} sizePage - Records per page, default 1, max 100
     * @param {String} options.coinName - Currency name
     * @returns {JSON} Object
     */
    getFixedProducts(currentPage, sizePage, options = {}) {
        validateRequiredParameters({ currentPage, sizePage })

        return this.request(
            Auth.KEYED,
            'GET',
            '/newearn/cloud/v1/saving/fixed/product',
            Object.assign(options, {
                currentPage: currentPage,
                sizePage: sizePage
            })
        )
    }

    /**
     * Fixed Savings Subscribe (SIGNED) <br>
     * POST /newearn/cloud/v1/saving/fixed/subscribe <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-fixed/subscribe}
     *
     * @param {String} productId - Product ID
     * @param {String} amount - Subscribe amount
     * @param {String} requestNo - Unique request number, length 20, digits 0-9
     * @param {String} autoSubscribe - Auto-subscribe type (OFF/REINVEST_FLEXIBLE/REINVEST_FIXED)
     * @returns {JSON} Object
     */
    fixedSubscribe(productId, amount, requestNo, autoSubscribe, options = {}) {
        validateRequiredParameters({ productId, amount, requestNo, autoSubscribe })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/newearn/cloud/v1/saving/fixed/subscribe',
            Object.assign(options, {
                productId: productId,
                amount: amount,
                requestNo: requestNo,
                autoSubscribe: autoSubscribe
            })
        )
    }

    /**
     * Get Fixed Savings Holdings (KEYED) <br>
     * GET /newearn/cloud/v1/saving/fixed/earn <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-fixed/query-holdings}
     *
     * @param {String} currentPage - Current page number, default 1
     * @param {String} sizePage - Records per page, default 1, max 100
     * @param {String} options.coinName - Currency name
     * @param {String} options.productId - Product ID
     * @returns {JSON} Object
     */
    getFixedHoldings(currentPage, sizePage, options = {}) {
        validateRequiredParameters({ currentPage, sizePage })

        return this.request(
            Auth.KEYED,
            'GET',
            '/newearn/cloud/v1/saving/fixed/earn',
            Object.assign(options, {
                currentPage: currentPage,
                sizePage: sizePage
            })
        )
    }

    /**
     * Get Fixed Savings History Records (KEYED) <br>
     * GET /newearn/cloud/v1/saving/fixed/record <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-fixed/query-history-records}
     *
     * @param {String} type - Record type (subscribe/redeem/interest)
     * @param {Number} currentPage - Current page number, default 1
     * @param {Number} sizePage - Records per page, default 1, max 100
     * @param {Number} options.startTime - Start time in milliseconds
     * @param {Number} options.endTime - End time in milliseconds
     * @param {String} options.coinName - Currency name
     * @returns {JSON} Object
     */
    getFixedRecords(type, currentPage, sizePage, options = {}) {
        validateRequiredParameters({ type, currentPage, sizePage })

        return this.request(
            Auth.KEYED,
            'GET',
            '/newearn/cloud/v1/saving/fixed/record',
            Object.assign(options, {
                type: type,
                currentPage: currentPage,
                sizePage: sizePage
            })
        )
    }

    /**
     * Fixed Savings Early Redeem (SIGNED) <br>
     * POST /newearn/cloud/v1/saving/fixed/redeem <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-fixed/early-redeem}
     *
     * @param {String} earnId - Savings order ID
     * @param {String} requestNo - Unique request number, length 20, digits 0-9
     * @returns {JSON} Object
     */
    fixedEarlyRedeem(earnId, requestNo, options = {}) {
        validateRequiredParameters({ earnId, requestNo })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/newearn/cloud/v1/saving/fixed/redeem',
            Object.assign(options, {
                earnId: earnId,
                requestNo: requestNo
            })
        )
    }

    /**
     * Modify Fixed Savings Auto-Renewal (SIGNED) <br>
     * POST /newearn/cloud/v1/saving/fixed/subscribe/operate <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-fixed/modify-auto-renewal}
     *
     * @param {String} earnId - Savings order ID
     * @param {String} autoSubscribe - Auto-subscribe type (OFF/REINVEST_FLEXIBLE/REINVEST_FIXED)
     * @returns {JSON} Object
     */
    modifyFixedAutoRenewal(earnId, autoSubscribe, options = {}) {
        validateRequiredParameters({ earnId, autoSubscribe })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/newearn/cloud/v1/saving/fixed/subscribe/operate',
            Object.assign(options, {
                earnId: earnId,
                autoSubscribe: autoSubscribe
            })
        )
    }
}

module.exports = FinanceFixed
