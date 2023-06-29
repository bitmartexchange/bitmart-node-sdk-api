'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Futures Trading Endpoints
 * @module FuturesTrade
 * @param {*} superclass
 */
const FuturesTrade = superclass => class extends superclass {

    /**
     * Submit Order (SIGNED) <br>
     *
     * POST /contract/private/submit-order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#submit-order-signed}
     * 
     * @param {String} options.symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} options.client_order_id - Client-defined OrderId(A combination of numbers and letters, less than 32 bits)
     * @param {String} options.type - Order type <br>
     *                                  -limit(default) <br>
     *                                  -market <br>
     * @param {Int} options.side - Order side     <br>
     *                              -1=buy_open_long <br>
     *                              -2=buy_close_short <br>
     *                              -3=sell_close_long <br>
     *                              -4=sell_open_short <br>
     * @param {String} options.leverage - Order leverage
     * @param {String} options.open_type - Open type, required at close position <br>
     *                                                          -cross <br>
     *                                                          -isolated <br>
     * @param {Int} options.mode - Order mode <br>
     *                                  -1=GTC(default) <br>
     *                                  -2=FOK <br>
     *                                  -3=IOC <br>
     *                                  -4=Maker Only <br>
     * @param {String} options.price - Order price, required at limit order
     * @param {Int} options.size - Order size (Number of contracts)
     * @returns {JSON} Object
     */
    newFuturesOrder(options = {}) {
        return this.request(Auth.SIGNED, 'POST', '/contract/private/submit-order', Object.assign(options))
    }

    /**
     * Cancel Order (SIGNED) <br>
     * POST /contract/private/cancel-order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#cancel-order-signed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} orderId - Order ID
     * @returns {JSON} Object
     */
    cancelFuturesOrder(symbol, orderId) {
        validateRequiredParameters({ symbol, orderId })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/cancel-order', {
            symbol: symbol,
            order_id: orderId
        })
    }


    /**
     * Cancel All Orders (SIGNED) <br>
     * POST /contract/private/cancel-orders <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#cancel-all-orders-signed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON} Object
     */
    cancelAllFuturesOrder(symbol) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/cancel-orders', {
            symbol: symbol
        })
    }

    /**
    * Submit Plan Order (SIGNED) <br>
    *
    * POST /contract/private/submit-plan-order <br>
    * 
    * {@link https://developer-pro.bitmart.com/en/futures/#submit-plan-order-signed}
    * 
    * @param {String} options.symbol - Symbol of the contract(like BTCUSDT)
    * @param {String} options.type - Order type <br>
    *                                  -limit(default) <br>
    *                                  -market <br>
    * @param {Int} options.side - Order side     <br>
    *                              -1=buy_open_long <br>
    *                              -2=buy_close_short <br>
    *                              -3=sell_close_long <br>
    *                              -4=sell_open_short <br>
    * @param {String} options.leverage - Order leverage
    * @param {String} options.open_type - Open type, required at close position <br>
    *                                                          -cross <br>
    *                                                          -isolated <br>
    * @param {Int} options.mode - Order mode <br>
    *                                  -1=GTC(default) <br>
    *                                  -2=FOK <br>
    *                                  -3=IOC <br>
    *                                  -4=Maker Only <br>
    * @param {Int} options.size - Order size (Number of contracts)
    * @param {String} options.trigger_price - Trigger price
    * @param {String} options.executive_price - Order price, required at limit order
    * @param {Int} options.price_way - Price way <br>
    *                          -1=price_way_long <br>
    *                          -2=price_way_short <br>
    * @param {Int} options.price_type - Trigger price type <br>
    *                      -1=last_price <br>
    *                      -2=fair_price <br>
    * @returns {JSON} Object
    */
    newPlanOrder(options = {}) {
        return this.request(Auth.SIGNED, 'POST', '/contract/private/submit-plan-order', Object.assign(options))
    }

    /**
     * Cancel Plan Order (SIGNED) <br>
     * POST /contract/private/cancel-plan-order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#cancel-plan-order-signed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} orderId - Order ID
     * @returns {JSON} Object
     */
    cancelPlanOrder(symbol, orderId) {
        validateRequiredParameters({ symbol, orderId })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/cancel-plan-order', {
            symbol: symbol,
            order_id: orderId
        })
    }

    /**
     * Transfer (SIGNED) <br>
     * POST /account/v1/transfer-contract <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#transfer-signed}
     * 
     * @param {String} currency - Currency (Only USDT is supported)
     * @param {String} amount - Transfer amount，allowed range[0.01,10000000000]
     * @param {String} type - Transfer type <br>
     *                                  -spot_to_contract <br>
     *                                  -contract_to_spot <br>
     * @param {Long} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    transfer(currency, amount, type, options = {}) {
        validateRequiredParameters({ currency, amount, type })

        return this.request(Auth.SIGNED, 'POST', '/account/v1/transfer-contract', Object.assign(options, {
            currency: currency,
            amount: amount,
            type: type,
        }))
    }



    /**
     * Get Order Detail (KEYED) <br>
     * GET /contract/private/order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-order-detail-keyed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} orderId - Order ID
     * @returns {JSON} Object
     */
    getOrderDetail(symbol, orderId) {
        validateRequiredParameters({ symbol, orderId })

        return this.request(Auth.KEYED, 'GET', '/contract/private/order', {
            symbol: symbol,
            order_id: orderId
        })
    }

    /**
     * Get Order History (KEYED) <br>
     * GET /contract/private/order-history <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-order-history-keyed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {Long} options.start_time - Start time, default is the last 7 days
     * @param {Long} options.end_time - End time, default is the last 7 days
     * @returns {JSON} Object
     */
    getOrderHistory(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.KEYED, 'GET', '/contract/private/order-history', Object.assign(options, {
            symbol: symbol
        }))
    }


    /**
     * Get All Open Orders (KEYED) <br>
     * GET /contract/private/get-open-orders <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-all-open-orders-keyed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} options.type - Order type <br>
     *                                              -limit   <br>
     *                                              -market  <br>
     * @param {String} options.order_state - Order state <br>
     *                                                 -all(default)     <br>
     *                                                 -partially_filled <br>
     * @param {Int} options.limit - The number of returned results, with a maximum of 100 and a default of 100
     * @returns {JSON} Object
     */
    getAllOpenOrders(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.KEYED, 'GET', '/contract/private/get-open-orders', Object.assign(options, {
            symbol: symbol
        }))
    }


    /**
     * Get Current Position (KEYED) <br>
     * 
     * GET /contract/private/position <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-current-position-keyed}
     * 
     * @param {String} options.symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON} Object
     */
    getCurrentPosition(options = {}) {
        return this.request(Auth.KEYED, 'GET', '/contract/private/position', Object.assign(options))
    }

    /** 
     * Get Order Trade (KEYED) <br>
     * GET /contract/private/trades <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-order-trade-keyed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {Long} options.start_time - Start time, default is the last 7 days
     * @param {Long} options.end_time - End time, default is the last 7 days
     * @returns {JSON} Object
     */
    getOrderTrade(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.KEYED, 'GET', '/contract/private/trades', Object.assign(options, {
            symbol: symbol
        }))
    }

    /**
     * Get Transfer List (SIGNED) <br>
     * POST /account/v1/transfer-contract-list <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-transfer-list-signed}
     * 
     * @param {Int} page - Number of pages, allowed range [1,1000]
     * @param {Int} limit - Number of queries, allowed range [10,100]
     * @param {String} options.currency - Currency (like USDT)
     * @param {Long} options.time_start - Start time in milliseconds, (e.g. 1681701557927)
     * @param {Long} options.time_end - End time in milliseconds, (e.g. 1681701557927)
     * @param {Long} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    getTransferList(page, limit, options = {}) {
        validateRequiredParameters({ page, limit })

        return this.request(Auth.SIGNED, 'POST', '/account/v1/transfer-contract-list', Object.assign(options, {
            page: page,
            limit: limit
        }))
    }

}

module.exports = FuturesTrade