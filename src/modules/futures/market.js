'use strict'


const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Futures Market Data Endpoints
 * @module FuturesMarket
 * @param {*} superclass
 */
const FuturesMarket = superclass => class extends superclass {

    /**
     * Get Contract Details <br>
     *
     * GET /contract/public/details <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futures/#get-contract-details}
     * @param {String} options.symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON}
     */
    getDetails(options = {}) {
        return this.request(Auth.NONE, 'GET', '/contract/public/details', Object.assign(options))
    }


    /**
     * Get Market Depth <br>
     *
     * GET /contract/public/depth <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futures/#get-market-depth}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON}
     */
    getDepth(symbol) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/contract/public/depth', {
            symbol: symbol
        })
    }

    /**
     * Get Futures Open Interest <br>
     *
     * GET /contract/public/open-interest <br>
     *
     * {@link https://developer-pro.bitmart.com/en/futures/#get-futures-openinterest}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON}
     */
    getOpenInterest(symbol) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/contract/public/open-interest', {
            symbol: symbol
        })
    }

    /**
     * Get Current Funding Rate <br>
     * GET /contract/public/funding-rate <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-current-funding-rate}
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @returns {JSON}
     */
    getCurrentFundingRate(symbol) {
        validateRequiredParameters({ symbol })

        return this.request(Auth.NONE, 'GET', '/contract/public/funding-rate', {
            symbol: symbol
        })
    }

    /**
     * Get K-line <br>
     * GET /contract/public/kline <br>
     * 
     * {@link https://developer-pro.bitmart.com/en/futures/#get-k-line}
     * 
     * @param {String} symbol - Symbol of the contract(like BTCUSDT)
     * @param {Number} startTime - Start time. Timestamps need to be in seconds
     * @param {Number} endTime - End time. Timestamps need to be in seconds
     * @param {Number} options.step - K-Line step, default is 1 minute. step: 1, 3, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080
     * @returns {JSON}
     */
    getKline(symbol, startTime, endTime, options = {}) {
        return this.request(Auth.NONE, 'GET', '/contract/public/kline', Object.assign(options, {
            symbol: symbol,
            start_time: startTime,
            end_time: endTime
        }))
    }

}

module.exports = FuturesMarket