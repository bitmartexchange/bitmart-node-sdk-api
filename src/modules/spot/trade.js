'use strict'

const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Spot / Margin Trading Endpoints
 * @module Trade
 * @param {*} superclass
 */
const Trade = superclass => class extends superclass {

    /**
     * New Order(v2) (SIGNED) <br>
     * POST /spot/v2/submit_order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#new-order-v2-signed}
     * 
     * @param {String} symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} side - Side (buy/sell)
     * @param {String} type - Order type (limit/market/limit_makers/ioc)
     * @param {String} options.clientOrderId - Client-defined OrderId(A combination of numbers and letters, less than 32 bits)
     * @param {String} options.size : Order size
     * @param {String} options.price : Order Price | Quantity sold, required when selling at market price size
     * @param {String} options.notional : Quantity bought, required when buying at market price notional
     * @returns {JSON} Object
     */
    newSpotOrder(symbol, side, type, options = {}) {
        validateRequiredParameters({ symbol, side, type })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v2/submit_order',
            Object.assign(options, {
                symbol: symbol,
                side: side,
                type: type
            })
        )
    }

    /**
     * New Batch Order(v2) (SIGNED) <br>
     * POST /spot/v2/batch_orders <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#new-batch-order-v2-signed}
     * 
     * @param {Object} params - Order parameters, the number of transactions cannot exceed 10
     * @returns {JSON} Object 
     */
    newBatchSpotOrder(params = {}) {
        validateRequiredParameters({ params })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v2/batch_orders',
            Object.assign(params)
        )
    }

    /**
     * New Margin Order(v1) (SIGNED) <br>
     * POST /spot/v1/margin/submit_order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#new-margin-order-v1-signed}
     * 
     * @param {String} symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} side - Side (buy/sell)
     * @param {String} type - Order type (limit/market/limit_makers/ioc) 
     * @param {String} options.clientOrderId - Client-defined OrderId(A combination of numbers and letters, less than 32 bits)
     * @param {String} options.size - Order size | Quantity sold, required when selling at market price size
     * @param {String} options.price - Order price 
     * @param {String} options.notional - Quantity bought, required when buying at market price notional
     * @returns {JSON} Object
     */
    newMarginOrder(symbol, side, type, options = {}) {
        validateRequiredParameters({ symbol, side, type })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v1/margin/submit_order',
            Object.assign(options, {
                symbol: symbol,
                side: side,
                type: type
            })
        )
    }

    /**
     * Cancel Order(v3) (SIGNED) <br>
     * POST /spot/v3/cancel_order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#cancel-order-v3-signed}
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {String} options.order_id - Order ID
     * @param {String} options.client_order_id - Client-defined Order ID
     * @returns {JSON} Object
     */
    cancelOrder(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v3/cancel_order',
            Object.assign(options, {
                symbol: symbol
            })
        )
    }

    /**
     * Cancel Batch Order(v1) (SIGNED) <br>
     * POST /spot/v1/cancel_orders
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#cancel-batch-order-v1-signed}
     * 
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.side - Order side (buy/sell)
     * @returns {JSON} Object
     */
    cancelBatchOrder(options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v1/cancel_orders',
            Object.assign(options)
        )
    }

    /**
     * Query Order By Id (v4) (SIGNED) <br>
     * POST /spot/v4/query/order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#query-order-by-id-v4-signed}
     * 
     * @param {String} orderId - Order id
     * @param {String} options.queryState - Query Type (open/history)
     * @param {Long} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JOSN} Object
     */
    queryOrderById(orderId, options = {}) {
        validateRequiredParameters({ orderId })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/order',
            Object.assign(options, {
                orderId: orderId
            })
        )
    }

    /**
     * Query Order By ClientOrderId(v4) (SIGNED) <br>
     * POST /spot/v4/query/client-order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#query-order-by-clientorderid-v4-signed}
     * @param {String} clientOrderId - User-defined order id
     * @param {String} options.queryState - Query Type (open/history)
     * @param {Long} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JOSN} Object
     */
    queryOrderByClientOrderId(clientOrderId, options = {}) {
        validateRequiredParameters({ clientOrderId })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/client-order',
            Object.assign(options, {
                clientOrderId: clientOrderId
            })
        )
    }

    /**
     * Current Open Orders(v4) (SIGNED) <br>
     * POST /spot/v4/query/open-orders
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#current-open-orders-v4-signed}
     * 
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.orderMode - Order mode (spot/iso_margin)
     * @param {String} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {String} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {String} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {String} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JOSN} Object
     */
    queryCurrentOpenOrder(options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/open-orders',
            Object.assign(options)
        )
    }

    /** 
     * Account Orders(v4) (SIGNED) <br>
     * POST /spot/v4/query/history-orders <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#account-orders-v4-signed}
     * 
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.orderMode - Order mode (spot/iso_margin)
     * @param {String} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {String} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {String} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {String} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JOSN} Object
     */
    queryAccountOrders(options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/history-orders',
            Object.assign(options)
        )
    }

    /**
     * Account Trade List(v4) (SIGNED) <br>
     * POST /spot/v4/query/trades <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#account-trade-list-v4-signed}
     * 
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.orderMode - Order mode (spot/iso_margin)
     * @param {String} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {String} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {String} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {String} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JOSN} Object
     */
    queryAccountTrades(options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/trades',
            Object.assign(options)
        )
    }

    /**
     * Order Trade List(v4) (SIGNED) <br>
     * POST /spot/v4/query/order-trades <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#order-trade-list-v4-signed}
     * 
     * @param {String} orderId - Order id
     * @param {Long} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JOSN} Object
     */
    queryOrderTrades(orderId, options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/order-trades',
            Object.assign(options, {
                orderId: orderId
            })
        )
    }
}

module.exports = Trade