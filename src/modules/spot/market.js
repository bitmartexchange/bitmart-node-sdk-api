'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Public Market Data Endpoints
 * @module Market
 * @param {*} superclass
 */
const Market = superclass => class extends superclass {

    /**
     * Get Currency List (V1) <br>
     *
     * GET /spot/v1/currencies <br>
     *
     * {@link https://developer-pro.bitmart.com/en/spot/#get-currency-list}
     * 
     */
    getCurrencies() {
        return this.request(Auth.NONE, 'GET', '/spot/v1/currencies')
    }


    /**
    * Get List of Trading Pairs (V1) <br>
    *
    * GET /spot/v1/symbols <br>
    *
    * {@link https://developer-pro.bitmart.com/en/spot/#get-list-of-trading-pairs}
    */
    getSymbols() {
        return this.request(Auth.NONE, 'GET', '/spot/v1/symbols')
    }

    /**
    * Get List of Trading Pair Details (V1) <br>
    *
    * GET /spot/v1/symbols/details <br>
    *
    * {@link https://developer-pro.bitmart.com/en/spot/#get-list-of-trading-pair-details}
    */
    getSymbolsDetails() {
        return this.request(Auth.NONE, 'GET', '/spot/v1/symbols/details')
    }

    /**
     * Get Ticker of All Pairs (V3) <br>
     * 
     * GET /spot/quotation/v3/tickers <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-ticker-of-all-pairs-v3}
     */
    getV3Tickers() {
        return this.request(Auth.NONE, 'GET', '/spot/quotation/v3/tickers')
    }

    /**
     * Get Ticker of a Trading Pair (V3) <br>
     * 
     * GET /spot/quotation/v3/ticker     <br>
     * 
     * @param {String} symbol  - Trading pair (e.g. BMX_USDT)
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-ticker-of-a-trading-pair-v3}
     */
    getV3Ticker(symbol) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/spot/quotation/v3/ticker', {
            symbol: symbol
        })
    }

    /**
     * Get Latest K-Line (V3)     <br>
     * 
     * GET /spot/quotation/v3/lite-klines <br>
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {Long} options.before - Query timestamp (unit: second), query the data before this time
     * @param {Long} options.after -  Query timestamp (unit: second), query the data after this time
     * @param {Int} options.step -  k-line step, value [1, 3, 5, 15, 30, 45, 60, 120, 180, 240, 1440, 10080, 43200] unit: minute, default 1
     * @param {Int} options.limit -  Return number, the maximum value is 200, default is 100
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-latest-k-line-v3}
     */
    getV3LatestKline(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/spot/quotation/v3/lite-klines', Object.assign(options, {
            symbol: symbol,
        }))
    }


    /**
     * Get History K-Line (V3) <br>
     * 
     * GET /spot/quotation/v3/klines <br>
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {Long} options.before - Query timestamp (unit: second), query the data before this time
     * @param {Long} options.after -  Query timestamp (unit: second), query the data after this time
     * @param {Int} options.step -  k-line step, value [1, 3, 5, 15, 30, 45, 60, 120, 180, 240, 1440, 10080, 43200] unit: minute, default 1
     * @param {Int} options.limit -  Return number, the maximum value is 200, default is 100
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-history-k-line-v3}
     */
    getV3HistoryKline(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/spot/quotation/v3/klines', Object.assign(options, {
            symbol: symbol,
        }))
    }

    /**
     * Get Depth (V3) <br>
     * 
     * GET /spot/quotation/v3/books <br>
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {Int} options.limit -  Order book depth per side. Maximum 50, e.g. 50 bids + 50 asks. Default returns to 35 depth data, e.g. 35 bids + 35 asks.
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-depth-v3}
     */
    getV3Depth(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/spot/quotation/v3/books', Object.assign(options, {
            symbol: symbol
        }))
    }

    /**
     * Get Recent Trades (V3)  <br>
     * 
     * GET /spot/quotation/v3/trades <br>
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {Int} options.limit - Number of returned items, maximum is 50, default 50
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-recent-trades-v3}
     */
    getV3Trades(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/spot/quotation/v3/trades', Object.assign(options, {
            symbol: symbol
        }))
    }

}

module.exports = Market