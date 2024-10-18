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
     * @param {Number} options.side - Order side     <br>
     *                              -1=buy_open_long <br>
     *                              -2=buy_close_short <br>
     *                              -3=sell_close_long <br>
     *                              -4=sell_open_short <br>
     * @param {String} options.leverage - Order leverage
     * @param {String} options.open_type - Open type, required at close position <br>
     *                                                          -cross <br>
     *                                                          -isolated <br>
     * @param {Number} options.mode - Order mode <br>
     *                                  -1=GTC(default) <br>
     *                                  -2=FOK <br>
     *                                  -3=IOC <br>
     *                                  -4=Maker Only <br>
     * @param {String} options.price - Order price, required at limit order
     * @param {Number} options.size - Order size (Number of contracts)
     * @param {String} options.activation_price - Activation price, required at trailing order
     * @param {String} options.callback_rate - Callback rate, required at trailing order, min 0.1, max 5 where 1 for 1%
     * @param {Number} options.activation_price_type - Activation price type, required at trailing order(1=last_price,2=fair_price)
     * @param {Number} options.preset_take_profit_price_type - Pre-set TP price type(1=last_price(default),2=fair_price)
     * @param {Number} options.preset_stop_loss_price_type - Pre-set SL price type(1=last_price(default),2=fair_price)
     * @param {String} options.preset_take_profit_price - Pre-set TP price
     * @param {String} options.preset_stop_loss_price - Pre-set SL price
     * 
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
     * @param options
     * @param {String} options.order_id - Order ID
     * @param {String} options.client_order_id - Client-defined OrderId
     * @returns {JSON} Object
     */
    cancelOrder(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/cancel-order', Object.assign(options, {
            symbol: symbol,
        }))
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
    cancelAllOrder(symbol) {
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
    * @param {Number} options.side - Order side     <br>
    *                              -1=buy_open_long <br>
    *                              -2=buy_close_short <br>
    *                              -3=sell_close_long <br>
    *                              -4=sell_open_short <br>
    * @param {String} options.leverage - Order leverage
    * @param {String} options.open_type - Open type, required at close position <br>
    *                                                          -cross <br>
    *                                                          -isolated <br>
    * @param {Number} options.mode - Order mode <br>
    *                                  -1=GTC(default) <br>
    *                                  -2=FOK <br>
    *                                  -3=IOC <br>
    *                                  -4=Maker Only <br>
    * @param {Number} options.size - Order size (Number of contracts)
    * @param {String} options.trigger_price - Trigger price
    * @param {String} options.executive_price - Order price, required at limit order
    * @param {Number} options.price_way - Price way <br>
    *                          -1=price_way_long <br>
    *                          -2=price_way_short <br>
    * @param {Number} options.price_type - Trigger price type <br>
    *                      -1=last_price <br>
    *                      -2=fair_price <br>
    * @param {Number} options.plan_category - TP/SL type (1=TP/SL, 2=Position TP/SL)
    * @param {Number} options.preset_take_profit_price_type - Pre-set TP price type (1=last_price(default), 2=fair_price)
    * @param {Number} options.preset_stop_loss_price_type - Pre-set SL price type (1=last_price(default), 2=fair_price)
    * @param {String} options.preset_take_profit_price - Pre-set TP price
    * @param {String} options.preset_stop_loss_price - Pre-set SL price
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
     * @param options
     * @param options.order_id - Order ID
     * @param options.client_order_id - Client Order ID
     * @returns {JSON} Object
     */
    cancelPlanOrder(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/cancel-plan-order', Object.assign(options, {
            symbol: symbol,
        }))
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
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
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
     * Submit Leverage (SIGNED)
     * {@link https://developer-pro.bitmart.com/en/futures/#submit-leverage-signed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} openType - Open type, required at close position
                                    -cross     <br>
                                    -isolated  <br>
     * @param {String} options.leverage - Order leverage
     * @returns {JSON} Object
     */
    submitLeverage(symbol, openType, options = {}) {
        validateRequiredParameters({ symbol, openType })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/submit-leverage', Object.assign(options, {
            symbol: symbol,
            open_type: openType
        }))
    }

    /**
     * Get Trade Fee Rate (KEYED) <br>
     * GET /contract/private/trade-fee-rate <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futuresv2/#get-trade-fee-rate-keyed}
     *
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON} Object
     */
    getTradeFeeRate(symbol) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.KEYED, 'GET', '/contract/private/trade-fee-rate', {
            symbol: symbol,
        })
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
     * @param {Number} options.start_time - Start time, default is the last 7 days
     * @param {Number} options.end_time - End time, default is the last 7 days
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
     * @param {Number} options.limit - The number of returned results, with a maximum of 100 and a default of 100
     * @returns {JSON} Object
     */
    getAllOpenOrders(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.KEYED, 'GET', '/contract/private/get-open-orders', Object.assign(options, {
            symbol: symbol
        }))
    }

    /**
     * Get All Current Plan Orders (KEYED) <br>
     * GET /contract/private/current-plan-order <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-all-current-plan-orders-keyed}
     * 
     * @param {String} options.symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} options.type - Order type <br>
     *                                              -limit   <br>
     *                                              -market  <br>
     * @param {Number} options.limit - The number of returned results, with a maximum of 100 and a default of 100
     * @param {Number} options.plan_type - Plan order type
     *                                  -plan
     *                                  - profit_loss
     * @returns {JSON} Object
     */
      getAllCurrentPlanOrders(options = {}) {
        return this.request(Auth.KEYED, 'GET', '/contract/private/current-plan-order', Object.assign(options))
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
     * Get Current Position Risk Details(KEYED) <br>
     * 
     * GET /contract/private/position-risk <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-current-position-risk-details-keyed}
     * 
     * @param {String} options.symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON} Object
     */
     getCurrentPositionRisk(options = {}) {
        return this.request(Auth.KEYED, 'GET', '/contract/private/position-risk', Object.assign(options))
    }

    /** 
     * Get Order Trade (KEYED) <br>
     * GET /contract/private/trades <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-order-trade-keyed}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {Number} options.start_time - Start time, default is the last 7 days
     * @param {Number} options.end_time - End time, default is the last 7 days
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
     * @param {Number} page - Number of pages, allowed range [1,1000]
     * @param {Number} limit - Number of queries, allowed range [10,100]
     * @param {String} options.currency - Currency (like USDT)
     * @param {Number} options.time_start - Start time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.time_end - End time in milliseconds, (e.g. 1681701557927)
     * @param {Number} options.recvWindow - Trade time limit, allowed range (0,60000], default: 5000 milliseconds
     * @returns {JSON} Object
     */
    getTransferList(page, limit, options = {}) {
        validateRequiredParameters({ page, limit })

        return this.request(Auth.SIGNED, 'POST', '/account/v1/transfer-contract-list', Object.assign(options, {
            page: page,
            limit: limit
        }))
    }

    /**
     * Submit TP/SL Order (SIGNED) <br>
     * POST /contract/private/submit-tp-sl-order <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futuresv2/#submit-tp-or-sl-order-signed}
     *
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} type - Order type
     *                          -take_profit
     *                          -stop_loss
     * @param {Number} side - Order side
     *                            -2=buy_close_short
     *                            -3=sell_close_long
     * @param {String} trigger_price - Trigger price
     * @param {String} executive_price - Execution price
     * @param {Number} price_type - Trigger price type
     *                           -1=last_price
     *                           -2=fair_price
     * @param options
     * @param {Number} options.size - Order size (Number of contracts) Default the size of position
     * @param {Number} options.plan_category - TP/SL type
     *                                          -1=TP/SL(default)
     *                                          -2=Position TP/SL
     * @param {String} options.client_order_id - Client order ID
     * @param {String} options.category - Trigger order type, position TP/SL default market
     *                                  -limit
     *                                  -market
     * @returns {JSON} Object
     */
    submitTpSlOrder(symbol, type, side, trigger_price, executive_price, price_type, options = {}) {
        validateRequiredParameters({ symbol, type, side, trigger_price, executive_price, price_type  })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/submit-tp-sl-order', Object.assign(options, {
            symbol: symbol,
            type: type,
            side: side,
            trigger_price: trigger_price,
            executive_price: executive_price,
            price_type: price_type,
        }))
    }

    /**
     * Modify Plan Order (SIGNED) <br>
     * POST /contract/private/modify-plan-order <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futuresv2/#modify-plan-order-signed}
     *
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} trigger_price - Trigger price
     * @param {Number} price_type - Trigger price type
     *                  -1=last_price
     *                  -2=fair_price
     * @param {String} type - Order type
     *                       -limit
     *                      -market
     * @param options
     * @param {String} options.order_id - Order ID(order_id or client_order_id must give one)
     * @param {String} options.client_order_id - Client order ID(order_id or client_order_id must give one)
     * @param {String} options.executive_price - Execution price for plan order, mandatory when type = limit
     * @returns {JSON} Object
     */
    modifyPlanOrder(symbol, trigger_price, price_type, type, options = {}) {
        validateRequiredParameters({ symbol, type, trigger_price, price_type  })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/modify-plan-order', Object.assign(options, {
            symbol: symbol,
            type: type,
            trigger_price: trigger_price,
            price_type: price_type,
        }))
    }

    /**
     * Modify Preset Plan Order (SIGNED) <br>
     * POST /contract/private/modify-preset-plan-order <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futuresv2/#modify-preset-plan-order-signed}
     *
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} order_id - Symbol of the contract(like BTCUSDT)
     * @param options
     * @param {String} options.preset_take_profit_price_type - Pre-set TP price type
     *                      -1=last_price(default)
     *                      -2=fair_price
     * @param {String} options.preset_stop_loss_price_type - Pre-set SL price type
     *                      -1=last_price(default)
     *                      -2=fair_price
     * @param {String} options.preset_take_profit_price - Pre-set TP price
     * @param {String} options.preset_stop_loss_price - Pre-set SL price
     * @returns {JSON} Object
     */
    modifyPresetPlanOrder(symbol, order_id, options = {}) {
        validateRequiredParameters({symbol, order_id})

        return this.request(Auth.SIGNED, 'POST', '/contract/private/modify-preset-plan-order', Object.assign(options, {
            symbol: symbol,
            order_id: order_id,
        }))
    }

    /**
     * Modify TP/SL Order (SIGNED) <br>
     * POST /contract/private/modify-tp-sl-order <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futuresv2/#modify-tp-sl-order-signed}
     *
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {String} trigger_price - Trigger price
     * @param {String} price_type - Trigger price type
     *                  -1=last_price
     *                  -2=fair_price
     * @param options
     * @param {String} options.order_id - Order ID(order_id or client_order_id must give one)
     * @param {String} options.client_order_id - Client order ID(order_id or client_order_id must give one)
     * @param {String} options.executive_price - Execution price for order, mandatory when plan_category = 1
     * @param {String} options.plan_category - TP/SL type
     *                          -1=TP/SL
     *                          -2=Position TP/SL
     * @param {String} options.category - Order type, Position TP/SL default market
     *                          -limit
     *                          -market
     * @returns {JSON} Object
     */
    modifyTpSlOrder(symbol, trigger_price, price_type, options = {}) {
        validateRequiredParameters({symbol, trigger_price, price_type })

        return this.request(Auth.SIGNED, 'POST', '/contract/private/modify-tp-sl-order', Object.assign(options, {
            symbol: symbol,
            trigger_price: trigger_price,
            price_type: price_type,
        }))
    }


}

module.exports = FuturesTrade