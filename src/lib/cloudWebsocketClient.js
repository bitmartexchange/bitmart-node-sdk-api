'use strict'

const zlib = require('zlib')
const crypto = require('crypto')
const WebSocketClient = require('ws')
const { isEmptyValue, defaultLogger } = require('../lib/utils')
const {execSync} = require('child_process');

class CloudWebsocketClient {
  constructor (wsURL, isSpot, options = {}) {
    this.isSpot = isSpot
    this.wsURL = wsURL
    this.apiKey = options.apiKey
    this.apiSecret = options.apiSecret
    this.apiMemo = options.apiMemo
    this.callbacks = options.callbacks || {}
    this.reconnectDelay = options.reconnectDelay || 5000
    this.logger = options.logger || defaultLogger
    this.wsConnection = {}
  }

  isConnected () {
    if (!this.wsConnection.ws || this.wsConnection.ws.readyState !== WebSocketClient.OPEN) return false
    return true
  }

  initConnect () {
    const ws = new WebSocketClient(this.wsURL)
    this.logger.info(`Sending Websocket connection to: ${this.wsURL}`)
    this.wsConnection.ws = ws
    this.wsConnection.closeInitiated = false

    ws.on('open', () => {
      this.logger.info(`Connected to the Websocket Server: ${this.wsURL}`)
      this.callbacks.open && this.callbacks.open(this)

      setInterval(() => {
        this.wsConnection.ws.ping()
      }, 5000)

    })

    ws.on('message', data => {
      if(data.toString() === 'pong') {
        return
      }

      if (!data.toString().startsWith("{")) {
          const decompressedData = zlib.inflateRawSync(data);
          this.callbacks.message && this.callbacks.message(decompressedData.toString())
      } else {
          this.callbacks.message && this.callbacks.message(data.toString())
      }
      
    })

    ws.on('ping', () => {
      // this.logger.info('Received PING from server')
      this.callbacks.ping && this.callbacks.ping()
    })

    ws.on('pong', () => {
      // this.logger.info('Received PONG from server')
      this.callbacks.pong && this.callbacks.pong()
    })

    ws.on('error', err => {
      this.logger.error('Received error from server')
      this.callbacks.error && this.callbacks.error()
      this.logger.error(err)
    })

    ws.on('close', (closeEventCode, reason) => {
      if (!this.wsConnection.closeInitiated) {
        this.callbacks.close && this.callbacks.close()
        this.logger.warn(`Connection close due to ${closeEventCode}: ${reason}.`)
        setTimeout(() => {
          this.logger.debug('Reconnect to the server.')
          this.initConnect()
        }, this.reconnectDelay)
      } else {
        this.wsConnection.closeInitiated = false
      }
    })
  }

  /**
   * Unsubscribe the stream <br>
   *
   * @param {WebSocketClient} wsConnection - websocket client instance created by ws package
   */
  disconnect () {
    if (!this.isConnected()) this.logger.warn('No connection to close.')
    else {
      this.wsConnection.closeInitiated = true
      this.wsConnection.ws.close()
      this.logger.info('Disconnected with BitMart Websocket Server')
    }
  }

  /**
   * Send message
   * @param {JSON} message 
   */
  send (message) {
    if (!this.isConnected()) this.logger.warn('Send only can be sent when connection is ready.')
    else {
      this.wsConnection.ws.send(message)
    }
  }

  login() {
    if (!this.isConnected()) {
      this.logger.error('Not connected')
      return
    }

    if(isEmptyValue(this.apiKey)) {
      this.logger.error('api key miss')
      return
    }

    if(isEmptyValue(this.apiSecret)) {
      this.logger.error('api secret miss')
      return
    }

    if(isEmptyValue(this.apiMemo)) {
      this.logger.error('api memo miss')
      return
    }


    const timestamp = Date.now()
    const sign = crypto
      .createHmac('sha256', this.apiSecret)
      .update(timestamp + "#" + this.apiMemo + "#" + "bitmart.WebSocket")
      .digest('hex')

    let loginMessage = {}
    if(this.isSpot) {
      loginMessage = {
        op: 'login',
        args: [this.apiKey, timestamp, sign],
      }
      
    } else {
      loginMessage = {
        action: 'access',
        args: [this.apiKey, timestamp + "", sign, 'web'],
      }
    }

    this.send(JSON.stringify(loginMessage))
    this.logger.debug('logging in....')
    execSync('sleep 2')

  }
}

module.exports = CloudWebsocketClient
