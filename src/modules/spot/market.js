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
    * @deprecated This function is deprecated and will be removed in the next release.
    * Use the `getV3Ticker()` method instead.
    * 
    * Get Ticker of All Pairs (V2) <br>
    *
    * GET /spot/v2/ticker <br>
    *
    * {@link https://developer-pro.bitmart.com/en/spot/#get-ticker-of-all-pairs-v2}
    */
    getTicker() {
        return this.request(Auth.NONE, 'GET', '/spot/v2/ticker')
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
    * @deprecated This function is deprecated and will be removed in the next release.
    * Use the `getV3Ticker()` method instead.
    * Get Ticker of a Trading Pair (V1) <br>
    *
    * GET /spot/v1/ticker_detail <br>
    * @param {String} symbol - Trading pair (e.g. BMX_USDT)
    * {@link https://developer-pro.bitmart.com/en/spot/#get-ticker-of-a-trading-pair}
    */
    getTickerDetail(symbol) {
        return this.request(Auth.NONE, 'GET', '/spot/v1/ticker_detail', {
            symbol: symbol
        })
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
    * @deprecated This function is deprecated and will be removed in the next release.
    * 
    * Get K-Line Step <br>
    *
    * GET /spot/v1/steps <br>
    *
    * {@link https://developer-pro.bitmart.com/en/spot/#get-k-line-step}
    */
    getKlineStep() {
        return this.request(Auth.NONE, 'GET', '/spot/v1/steps')
    }


    /**
     * @deprecated This function is deprecated and will be removed in the next release.
     * Use the `getV3LatestKline() or getV3HistoryKline()` method instead.
     * Get K-Line <br>
     * 
     * GET /spot/v1/symbols/kline
     * 
     * @param {String} symbol - Trading pair (e.g. BMX_USDT)
     * @param {Long} from - Start timestamp (in seconds, UTC+0 TimeZome)
     * @param {Long} to - End timestamp (in seconds, UTC+0 TimeZome)
     * @param {String} options.step - k-line step Steps (in minutes, default 1 minute)
     * 
     * {@link https://developer-pro.bitmart.com/en/spot/#get-k-line}
     */
    getKline(symbol, from, to, options = {}) {
        validateRequiredParameters({ symbol, from, to })

        return this.request(Auth.NONE, 'GET', '/spot/v1/symbols/kline', Object.assign(options, {
            symbol: symbol,
            from: from,
            to: to
        }))
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
    * @deprecated This function is deprecated and will be removed in the next release.
    * Use the `getV3Depth()` method instead.
    * Get Depth <br>
    *
    * /spot/v1/symbols/book (V1) <br>
    * @param {String} symbol - Trading pair (e.g. BMX_USDT)
    * @param {String} options.precision - Price precision, the range is defined in trading pair details
    * @param {Int} options.size - Number of results per request. The value can be transmitted [1-50], there are altogether [2-100] buying and selling depths
    * {@link https://developer-pro.bitmart.com/en/spot/#get-depth}
    */
    getDepth(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/spot/v1/symbols/book', Object.assign(options, {
            symbol: symbol
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
    * @deprecated This function is deprecated and will be removed in the next release.
    * Use the `getV3Trades()` method instead.
    * 
    * Get Recent Trades (V1) <br>
    *
    * GET /spot/v1/symbols/trades <br>
    * @param {String} symbol - Trading pair (e.g. BMX_USDT)
    * @param {Int} options.N - Number of returned items, the default maximum is 50
    * {@link https://developer-pro.bitmart.com/en/spot/#get-recent-trades}
    */
    getSymbolsTrades(symbol, options = {}) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/spot/v1/symbols/trades', Object.assign(options, {
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