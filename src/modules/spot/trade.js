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
     * @param {String} options.client_order_id - Client-defined OrderId(A combination of numbers and letters, less than 32 bits)
     * @param {String} options.size : Order size
     * @param {String} options.price : Order Price | Quantity sold, required when selling at market price size
     * @param {String} options.notional : Quantity bought, required when buying at market price notional
     * @param {String} options.stpMode - Self-trade prevention mode
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
     * New Batch Order(v4) (SIGNED) <br>
     * POST /spot/v4/batch_orders <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#new-batch-order-v4-signed}
     *
     * @param {String} symbol - Trading pair (e.g. BTC_USDT)
     * @param {Number} recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @param {List} orderParams - Order parameters, the number of transactions cannot exceed 10
     * @returns {JSON} Object 
     */
    v4NewBatchSpotOrder(symbol, orderParams = [], options = {}) {
        validateRequiredParameters({ symbol, orderParams })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/batch_orders',
            Object.assign(options, {
                symbol: symbol,
                orderParams: orderParams
            })
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
     * Cancel Batch Order(v4) (SIGNED) <br>
     * POST /spot/v4/cancel_orders
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#cancel-batch-order-v4-signed}
     * 
     * @param {String} symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.orderIds - Order Id List (Either orderIds or clientOrderIds must be provided)
     * @param {String} options.clientOrderIds - Client-defined OrderId List (Either orderIds or clientOrderIds must be provided)
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    v4CancelBatchOrder(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/cancel_orders',
            Object.assign(options, {
                symbol: symbol
            })
        )
    }

     /**
     * Cancel All Order(v4) (SIGNED) <br>
     * POST /spot/v4/cancel_all
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#cancel-all-order-v4-signed}
     * 
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.side - Order side (buy or sell)
     * @returns {JSON} Object
     */
     v4CancelAllOrder(options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/cancel_all',
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
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
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
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
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
     * @param {Number} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
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
     * @param {Number} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
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
     * @param {Number} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
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
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
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

    /**
     * New Algo Order(v4) (SIGNED) <br>
     * POST /spot/v4/algo/submit_order <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-trading/algo-submit}
     *
     * @param {String} symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} side - Side (buy/sell)
     * @param {String} type - Order type (tp/sl=one-way take-profit/stop-loss, trigger=plan order)
     * @param {String} options.client_order_id - Client-defined OrderId(A combination of numbers and letters, less than 32 bits)
     * @param {String} options.trigger_price - Trigger price (also requires the take-profit order price when set)
     * @param {String} options.trigger_type - Trigger type (Limit/Market)
     * @param {String} options.price - Order price (also requires the take-profit trigger price when set)
     * @param {String} options.notional - Special parameter for market buy order (type=market, side=buy)
     * @param {String} options.size - Special parameter for market sell order and limit order
     * @returns {JSON} Object
     */
    newSpotAlgoOrder(symbol, side, type, options = {}) {
        validateRequiredParameters({ symbol, side, type })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/algo/submit_order',
            Object.assign(options, {
                symbol: symbol,
                side: side,
                type: type
            })
        )
    }

    /**
     * Cancel Algo Order(v4) (SIGNED) <br>
     * POST /spot/v4/algo/cancel_order <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-trading/algo-cancel}
     *
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {String} order_id - Order ID
     * @param {String} type - Order type (tp/sl=one-way take-profit/stop-loss, trigger=plan order)
     * @returns {JSON} Object
     */
    cancelSpotAlgoOrder(symbol, order_id, type, options = {}) {
        validateRequiredParameters({ symbol, order_id, type })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/algo/cancel_order',
            Object.assign(options, {
                symbol: symbol,
                order_id: order_id,
                type: type
            })
        )
    }

    /**
     * Cancel All Algo Order(v4) (SIGNED) <br>
     * POST /spot/v4/algo/cancel_all <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-trading/algo-cancel-all}
     *
     * @param {String} type - Order type (tp/sl=one-way take-profit/stop-loss, trigger=plan order)
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @returns {JSON} Object
     */
    cancelSpotAlgoAllOrder(type, options = {}) {
        validateRequiredParameters({ type })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/algo/cancel_all',
            Object.assign(options, {
                type: type
            })
        )
    }

    /**
     * Query Algo Order By Id(v4) (SIGNED) <br>
     * POST /spot/v4/query/algo/order <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-trading/algo-query-order}
     *
     * @param {String} orderId - Order id
     * @param {String} options.queryState - Query Type (open/history)
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    querySpotAlgoOrderById(orderId, options = {}) {
        validateRequiredParameters({ orderId })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/algo/order',
            Object.assign(options, {
                orderId: orderId
            })
        )
    }

    /**
     * Query Algo Order By ClientOrderId(v4) (SIGNED) <br>
     * POST /spot/v4/query/algo/client-order <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-trading/algo-query-client}
     *
     * @param {String} clientOrderId - User-defined order id
     * @param {String} options.queryState - Query Type (open/history)
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    querySpotAlgoOrderByClientOrderId(clientOrderId, options = {}) {
        validateRequiredParameters({ clientOrderId })

        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/algo/client-order',
            Object.assign(options, {
                clientOrderId: clientOrderId
            })
        )
    }

    /**
     * Current Algo Open Orders(v4) (SIGNED) <br>
     * POST /spot/v4/query/algo/open-orders <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-trading/algo-open-orders}
     *
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.orderMode - Order mode (trigger/tp_sl)
     * @param {Number} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    querySpotAlgoCurrentOpenOrder(options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/algo/open-orders',
            Object.assign(options)
        )
    }

    /**
     * Algo History Orders(v4) (SIGNED) <br>
     * POST /spot/v4/query/algo/history-orders <br>
     *
     * {@link https://developer.bitmart.com/spot/spot-trading/algo-history}
     *
     * @param {String} options.symbol - Trading pair (e.g. BTC_USDT)
     * @param {String} options.orderMode - Order mode (trigger/tp_sl)
     * @param {Number} options.startTime - Start time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.endTime - End time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.limit - Number of queries, allowed range [1,200], default 200
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    querySpotAlgoHistoryOrders(options = {}) {
        return this.request(
            Auth.SIGNED,
            'POST',
            '/spot/v4/query/algo/history-orders',
            Object.assign(options)
        )
    }
}

module.exports = Trade