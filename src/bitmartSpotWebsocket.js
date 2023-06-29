'use strict'

const CloudWebsocketClient = require('./lib/cloudWebsocketClient')
const { validateRequiredParameters } = require('./lib/validation')

class BitmartSpotWebsocket extends (CloudWebsocketClient) {

  /**
   * @param {String} options.wsURL - websocket url
   * @param {String} options.apiKey - your api access key
   * @param {String} options.apiSecret - your api secret key
   * @param {String} options.apiMemo - your api memo
   * @param {Function} options.callbacks - accept data function
   * @param {Int} options.reconnectDelay - Reconnect delay time
   * @param {Log} options.logger - log
   */
  constructor(wsURL, options = {}) {
    validateRequiredParameters({wsURL})

    super(wsURL, true, options)
    this.initConnect()
  }

}

module.exports = BitmartSpotWebsocket
