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
     * Get Currency List <br>
     *
     * GET /spot/v1/currencies <br>
     *
     * {@link https://developer-pro.bitmart.com/en/spot/#get-currency-list}
     */
    getCurrencies() {
        return this.request(Auth.NONE, 'GET', '/spot/v1/currencies')
    }


    /**
    * Get List of Trading Pairs <br>
    *
    * GET /spot/v1/symbols <br>
    *
    * {@link https://developer-pro.bitmart.com/en/spot/#get-list-of-trading-pairs}
    */
    getSymbols() {
        return this.request(Auth.NONE, 'GET', '/spot/v1/symbols')
    }

    /**
    * Get List of Trading Pair Details <br>
    *
    * GET /spot/v1/symbols/details <br>
    *
    * {@link https://developer-pro.bitmart.com/en/spot/#get-list-of-trading-pair-details}
    */
    getSymbolsDetails() {
        return this.request(Auth.NONE, 'GET', '/spot/v1/symbols/details')
    }


    /**
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
    * Get Ticker of a Trading Pair <br>
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
    * Get Depth <br>
    *
    * /spot/v1/symbols/book <br>
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
    * Get Recent Trades <br>
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

}

module.exports = Market