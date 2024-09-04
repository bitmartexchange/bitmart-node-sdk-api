'use strict'

const { validateRequiredParameters } = require('../../lib/validation')
const { Auth } = require('../../lib/utils')

/**
 * Account Endpoints
 * @module Account
 * @param {*} superclass
 */
const Account = superclass => class extends superclass {
  /**
   * Get Account Balance (KEYED) <br>
   *
   * GET /account/v1/wallet <br>
   * @param {String} options.currency - currency
   * 
   * {@link https://developer-pro.bitmart.com/en/spot/#get-account-balance-keyed}
   */
  getSpotAccountBalance(options = {}) {
    return this.request(Auth.KEYED, 'GET', '/account/v1/wallet', Object.assign(options))
  }

  /**
   * Get Currencies <br>
   * 
   * GET /account/v1/currencies
   * 
   * {@link https://developer-pro.bitmart.com/en/spot/#get-currencies}
   */
  getCurrencies() {
    return this.request(Auth.NONE, 'GET', '/account/v1/currencies')
  }

  /**
  * Get Spot Wallet Balance (KEYED) <br>
  *
  * GET /spot/v1/wallet <br>
  * 
  * {@link https://developer-pro.bitmart.com/en/spot/#get-spot-wallet-balance-keyed}
  */
  getSpotWallet(options = {}) {
    return this.request(Auth.KEYED, 'GET', '/spot/v1/wallet')
  }



  /**
  * Deposit Address (KEYED) <br>
  *
  * GET /account/v1/deposit/address <br>
  * 
  * @param {String} currency - Token symbol, e.g., 'BTC'
  * 
  * {@link https://developer-pro.bitmart.com/en/spot/#deposit-address-keyed}
  */
  getDepositAddress(currency) {
    validateRequiredParameters({ currency })

    return this.request(Auth.KEYED, 'GET', '/account/v1/deposit/address', {
      currency: currency
    })

  }

  /**
  * Withdraw Quota (KEYED) <br>
  *
  * GET /account/v1/withdraw/charge <br>
  * @param {String} currency - Token symbol, e.g., 'BTC'
  * 
  * {@link https://developer-pro.bitmart.com/en/spot/#withdraw-quota-keyed}
  */
  getWithdrawQuota(currency) {
    validateRequiredParameters({ currency })

    return this.request(Auth.KEYED, 'GET', '/account/v1/withdraw/charge', {
      currency: currency
    })
  }


  /**
   * 
   * Withdraw (SIGNED) <br>
   * 
   * POST /account/v1/withdraw/apply <br>
   * 
   * @param {String} currency - Token symbol, e.g., 'BTC'
   * @param {String} amount - The amount of currency to withdraw
   * @param {String} options.address - Withdraw address (only the address added on the official website is supported)
   * @param {String} options.address_memo - Tag(tag Or payment_id Or memo)
   * @param {String} options.destination - Remark
   * @param {String} options.type - Account type(1=CID,2=Email,3=Phone)
   * @param {String} options.value - Account 
   * @param {String} options.areaCode - Phone area code, required when account type is phone, e.g.: 61
   * {@link https://developer-pro.bitmart.com/en/spot/#withdraw-signed}
   */
  withdraw(currency, amount, options = {}) {
    validateRequiredParameters({ currency, amount })

    return this.request(Auth.SIGNED, 'POST', '/account/v1/withdraw/apply', Object.assign(options, {
      currency: currency,
      amount: amount
    }))
  }

  /**
   * Get Deposit And Withdraw History (KEYED) <br>
   * 
   * GET /account/v2/deposit-withdraw/history <br>
   * @param {String} operationType - type (deposit/withdraw)
   * @param {String} N - Recent N records (value range 1-100)
   * @param {String} options.currency - Token symbol, e.g., 'BTC'
   * {@link https://developer-pro.bitmart.com/en/spot/#get-deposit-and-withdraw-history-keyed}
   */
  getDepositAndWithdrawHistory(operationType, N, options = {}) {
    validateRequiredParameters({ operationType, N })

    return this.request(Auth.KEYED, 'GET', '/account/v2/deposit-withdraw/history', Object.assign(options, {
      operation_type: operationType,
      N: N
    }))
  }

  /**
 * Get A Deposit Or Withdraw Detail (KEYED) <br>
 *
 * GET /account/v1/deposit-withdraw/detail <br>
 * @param {String} id - withdraw_id or deposit_id
 * {@link https://developer-pro.bitmart.com/en/spot/#get-a-deposit-or-withdraw-detail-keyed}
 */
  getDepositOrWithdrawDetail(id) {
    validateRequiredParameters({ id })

    return this.request(Auth.KEYED, 'GET', '/account/v1/deposit-withdraw/detail', {
      id: id
    })
  }

  /**
  * Get Margin Account Details(Isolated) (KEYED) <br>
  *
  * GET /spot/v1/margin/isolated/account <br>
  * @param {String} options.symbol - Trading pair (e.g. BMX_USDT), no symbol is passed, and all isolated margin assets are returned
  * {@link https://developer-pro.bitmart.com/en/spot/#get-margin-account-details-isolated-keyed}
  */
  getMarginAccountDetails(options = {}) {
    return this.request(Auth.KEYED, 'GET', '/spot/v1/margin/isolated/account', Object.assign(options))
  }


  /**
   * Margin Asset Transfer (SIGNED) <br>
   * 
   * POST /spot/v1/margin/isolated/transfer <br>
   * 
   * @param {String} symbol -  Trading pair (e.g. BMX_USDT)
   * @param {String} currency - Currency
   * @param {String} amount - Amount of transfers (precision: 8 decimal places)
   * @param {String} side - Transfer direction (in/out)
   * {@link https://developer-pro.bitmart.com/en/spot/#margin-asset-transfer-signed}
   */
  marginTransferAsset(symbol, currency, amount, side) {
    validateRequiredParameters({ symbol, currency, amount, side })

    return this.request(Auth.SIGNED, 'POST', '/spot/v1/margin/isolated/transfer', {
      symbol: symbol,
      currency: currency,
      amount: amount,
      side: side
    })
  }

  /**
  * Get Basic Fee Rate (KEYED) <br>
  *
  * GET /spot/v1/user_fee <br>
  * 
  * {@link https://developer-pro.bitmart.com/en/spot/#get-basic-fee-rate-keyed}
  */
  getUserFee() {
    return this.request(Auth.KEYED, 'GET', '/spot/v1/user_fee')
  }


  /**
  * Get Actual Trade Fee Rate (KEYED) <br>
  *
  * GET /spot/v1/trade_fee <br>
  * @param {String} symbol - Trading pair (e.g. BMX_USDT)
  * {@link https://developer-pro.bitmart.com/en/spot/#get-actual-trade-fee-rate-keyed}
  */
  getTradeFee(symbol) {
    validateRequiredParameters({ symbol })

    return this.request(Auth.KEYED, 'GET', '/spot/v1/trade_fee', {
      symbol: symbol
    })
  }


}

module.exports = Account