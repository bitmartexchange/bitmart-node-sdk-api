'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Finance Auto-Invest Endpoints
 * @module FinanceAuto
 * @param {*} superclass
 */
const FinanceAuto = superclass => class extends superclass {

    /**
     * Toggle Auto-Invest (SIGNED) <br>
     * POST /newearn/cloud/v1/saving/subscribe/batch/operate <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-auto/toggle}
     *
     * @param {String} autoSubscribe - Account-level auto-invest switch (open/close)
     * @returns {JSON} Object
     */
    toggleAutoSaving(autoSubscribe, options = {}) {
        validateRequiredParameters({ autoSubscribe })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/newearn/cloud/v1/saving/subscribe/batch/operate',
            Object.assign(options, {
                autoSubscribe: autoSubscribe
            })
        )
    }

    /**
     * Get Auto-Invest Status (KEYED) <br>
     * GET /newearn/cloud/v1/saving/subscribe/batch <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-auto/query-status}
     *
     * @returns {JSON} Object
     */
    getAutoSavingStatus(options = {}) {
        return this.request(Auth.KEYED, 'GET', '/newearn/cloud/v1/saving/subscribe/batch', Object.assign(options))
    }

    /**
     * Toggle Flexible Savings Auto-Subscribe (SIGNED) <br>
     * POST /newearn/cloud/v1/saving/subscribe/operate <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-auto/flexible-subscribe-toggle}
     *
     * @param {String} productId - Product ID
     * @param {String} autoSubscribe - Auto-subscribe switch (open/close)
     * @returns {JSON} Object
     */
    toggleFlexibleAutoSubscribe(productId, autoSubscribe, options = {}) {
        validateRequiredParameters({ productId, autoSubscribe })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/newearn/cloud/v1/saving/subscribe/operate',
            Object.assign(options, {
                productId: productId,
                autoSubscribe: autoSubscribe
            })
        )
    }

    /**
     * Get Flexible Savings Auto-Subscribe Status (KEYED) <br>
     * GET /newearn/cloud/v1/saving/subscribe/status <br>
     *
     * {@link https://developer.bitmart.com/finance/finance-auto/flexible-subscribe-status}
     *
     * @param {String} productId - Product ID
     * @returns {JSON} Object
     */
    getFlexibleAutoSubscribeStatus(productId, options = {}) {
        validateRequiredParameters({ productId })

        return this.request(
            Auth.KEYED,
            'GET',
            '/newearn/cloud/v1/saving/subscribe/status',
            Object.assign(options, {
                productId: productId
            })
        )
    }
}

module.exports = FinanceAuto
