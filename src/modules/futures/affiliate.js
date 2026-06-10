'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Futures Affiliate Endpoints
 * @module FuturesAffiliate
 * @param {*} superclass
 */
const FuturesAffiliate = superclass => class extends superclass {

    /**
     * Get Rebate List (KEYED) <br>
     * GET /contract/private/affiliate/rebate-list <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/rebate-list}
     *
     * @param {Number} page - Current page
     * @param {Number} size - Number of items per page
     * @param {String} currency - Query currency
     * @param {Number} options.user_id - Query user ID
     * @param {Number} options.rebate_start_time - Rebate start timestamp (in seconds)
     * @param {Number} options.rebate_end_time - Rebate end timestamp (in seconds)
     * @param {Number} options.register_start_time - Register start timestamp (in seconds)
     * @param {Number} options.register_end_time - Register end timestamp (in seconds)
     * @returns {JSON} Object
     */
    getAffiliateRebateList(page, size, currency, options = {}) {
        validateRequiredParameters({ page, size, currency })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/rebate-list',
            Object.assign(options, {
                page: page,
                size: size,
                currency: currency
            })
        )
    }

    /**
     * Get Trade List (KEYED) <br>
     * GET /contract/private/affiliate/trade-list <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/trade-list}
     *
     * @param {Number} user_id - Query user ID
     * @param {Number} type - Query type (1=USDT-M, 2=Coin-M)
     * @param {Number} page - Current page
     * @param {Number} size - Number of items per page
     * @param {Number} options.start_time - Query start timestamp (in seconds)
     * @param {Number} options.end_time - Query end timestamp (in seconds)
     * @returns {JSON} Object
     */
    getAffiliateTradeList(user_id, type, page, size, options = {}) {
        validateRequiredParameters({ user_id, type, page, size })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/trade-list',
            Object.assign(options, {
                user_id: user_id,
                type: type,
                page: page,
                size: size
            })
        )
    }

    /**
     * Get Rebate Invite User List (KEYED) <br>
     * GET /contract/private/affiliate/rebate-inviteUser <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/rebate-invite-user}
     *
     * @param {Number} start_time - Query start timestamp (in seconds)
     * @param {Number} end_time - Query end timestamp (in seconds)
     * @param {Number} page - Current page
     * @param {Number} size - Number of items per page
     * @param {Number} options.cid - Query user CID
     * @returns {JSON} Object
     */
    getAffiliateRebateInviteUser(start_time, end_time, page, size, options = {}) {
        validateRequiredParameters({ start_time, end_time, page, size })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/rebate-inviteUser',
            Object.assign(options, {
                start_time: start_time,
                end_time: end_time,
                page: page,
                size: size
            })
        )
    }

    /**
     * Get Invited User Deposit & Withdrawal List (KEYED) <br>
     * GET /contract/private/affiliate/deposit-withdrawal-list <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/deposit-withdrawal-list}
     *
     * @param {Number} page - Current page
     * @param {Number} size - Number of items per page
     * @param {Number} cid - Query user CID
     * @param {Number} start_time - Query start timestamp (in seconds)
     * @param {Number} end_time - Query end timestamp (in seconds)
     * @param {Number} options.type - Optional, 1=deposit, 2=withdrawal
     * @returns {JSON} Object
     */
    getAffiliateDepositWithdrawalList(page, size, cid, start_time, end_time, options = {}) {
        validateRequiredParameters({ page, size, cid, start_time, end_time })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/deposit-withdrawal-list',
            Object.assign(options, {
                page: page,
                size: size,
                cid: cid,
                start_time: start_time,
                end_time: end_time
            })
        )
    }

    /**
     * Get Invited User Futures Account Info (KEYED) <br>
     * GET /contract/private/affiliate/aff-customer-info <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/aff-customer-info}
     *
     * @param {Number} userId - The invited user ID to query
     * @returns {JSON} Object
     */
    getAffiliateCustomerInfo(userId, options = {}) {
        validateRequiredParameters({ userId })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/aff-customer-info',
            Object.assign(options, {
                userId: userId
            })
        )
    }

    /**
     * Invite Check (KEYED) <br>
     * GET /contract/private/affiliate/invite-check <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/invite-check}
     *
     * @param {Number} cid - Query user CID
     * @returns {JSON} Object
     */
    getAffiliateInviteCheck(cid, options = {}) {
        validateRequiredParameters({ cid })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/invite-check',
            Object.assign(options, {
                cid: cid
            })
        )
    }

    /**
     * Get Single User Rebate (KEYED) <br>
     * GET /contract/private/affiliate/rebate-user <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/rebate-user}
     *
     * @param {Number} cid - Query user CID
     * @param {Number} start_time - Query start timestamp (in seconds)
     * @param {Number} end_time - Query end timestamp (in seconds)
     * @returns {JSON} Object
     */
    getAffiliateRebateUser(cid, start_time, end_time, options = {}) {
        validateRequiredParameters({ cid, start_time, end_time })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/rebate-user',
            Object.assign(options, {
                cid: cid,
                start_time: start_time,
                end_time: end_time
            })
        )
    }

    /**
     * Get Single API User Rebate (KEYED) <br>
     * GET /contract/private/affiliate/rebate-api <br>
     *
     * {@link https://developer.bitmart.com/futures/futures-affiliate/rebate-api}
     *
     * @param {Number} cid - Query user CID
     * @param {Number} start_time - Query start timestamp (in seconds)
     * @param {Number} end_time - Query end timestamp (in seconds)
     * @returns {JSON} Object
     */
    getAffiliateRebateApi(cid, start_time, end_time, options = {}) {
        validateRequiredParameters({ cid, start_time, end_time })

        return this.request(
            Auth.KEYED,
            'GET',
            '/contract/private/affiliate/rebate-api',
            Object.assign(options, {
                cid: cid,
                start_time: start_time,
                end_time: end_time
            })
        )
    }
}

module.exports = FuturesAffiliate
