const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Margin Loan Endpoints
 * @module Margin
 * @param {*} superclass
 */
const Margin = superclass => class extends superclass {


    /**
     * Margin Borrow (Isolated) (SIGNED) <br>
     * POST /spot/v1/margin/isolated/borrow <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#margin-borrow-isolated-signed}
     * 
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {String} currency - Borrowing currency, selected according to the borrowing trading pair(like BTC or USDT)
     * @param {String} amount - Amount of borrowing (precision: 8 decimal places)
     * @returns {JSON} Object
     */
    isolatedMarginBorrow(symbol, currency, amount) {
        validateRequiredParameters({ symbol, currency, amount })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v1/margin/isolated/borrow',
            {
                symbol: symbol,
                currency: currency,
                amount: amount
            }
        )
    }


    /**
     * Margin Repay (Isolated) (SIGNED) <br>
     * POST /spot/v1/margin/isolated/repay <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#margin-repay-isolated-signed}
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {String} currency - Repayment currency, selected according to the borrowing trading pair(like BTC or USDT)
     * @param {String} amount - Amount of repayments (precision: 8 decimal places)
     * @returns {JSON} Object
     */
    isolatedMarginReply(symbol, currency, amount) {
        validateRequiredParameters({ symbol, currency, amount })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v1/margin/isolated/repay',
            {
                symbol: symbol,
                currency: currency,
                amount: amount
            }
        )
    }

    /**
     * Get Borrow Record(Isolated) (KEYED) <br>
     * GET /spot/v1/margin/isolated/borrow_record <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-borrow-record-isolated-keyed}
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {String} options.borrow_id - Borrow order id
     * @param {Number} options.start_time - Query start time: Timestamp
     * @param {Number} options.end_time - Query end time: Timestamp
     * @param {Number} options.N - Query record size, allowed range[1-100]. Default is 50
     * @returns {JSON} Object
     */
    getIsolatedBorrowRecord(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(
            Auth.KEYED,
            'GET',
            '/spot/v1/margin/isolated/borrow_record',
            Object.assign(options,
                {
                    symbol: symbol
                })
        )
    }


    /**
     * Get Repayment Record(Isolated) (KEYED) <br>
     * GET /spot/v1/margin/isolated/repay_record <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-repayment-record-isolated-keyed}
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {String} options.repay_id	- Repayment ID
     * @param {String} options.currency	- Currency
     * @param {Number} options.start_time - Query start time: Timestamp
     * @param {Number} options.end_time	- Query end time: Timestamp
     * @param {Number} options.N	- Query record size, allowed range[1-100]. Default is 50
     * @returns {JSON} Object
     */
    getIsolatedReplyRecord(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(
            Auth.KEYED,
            'GET',
            '/spot/v1/margin/isolated/repay_record',
            Object.assign(options,
                {
                    symbol: symbol
                })
        )
    }

    /**
     * Get Trading Pair Borrowing Rate and Amount (KEYED) <br>
     * GET /spot/v1/margin/isolated/pairs <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-trading-pair-borrowing-rate-and-amount-keyed}
     * 
     * @param {String} options.symbol - It can be multiple-choice; if not filled in, then return all, like BTC_USDT, ETH_USDT
     * @returns {JSON} Object
     */
    getIsolatedPairs(options = {}) {
        return this.request(
            Auth.KEYED,
            'GET',
            '/spot/v1/margin/isolated/pairs',
            Object.assign(options)
        )
    }
}

module.exports = Margin