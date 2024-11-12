'use strict'

const { Console } = require('console')
const BitmartFuturesWebsocket = require('../../../src/bitmartFuturesWebsocket')

const callbacks = {
  open: (client) => {
    // 【Public】Ticker Channel
    // client.send('{"action":"subscribe","args":["futures/ticker"]}')

    // 【Public】Depth Channel
    client.send('{"action":"subscribe","args":["futures/depth50:BTCUSDT"]}')
    
    // 【Public】Trade Channel
    // client.send('{"action":"subscribe","args":["futures/trade:BTCUSDT"]}')
    
    // 【Public】Kline Channel
    // client.send('{"action":"subscribe","args":["futures/klineBin1m:BTCUSDT"]}')

  },
  close: () => console.info('.........Disconnected with server'),
  pong: () => console.info('recv:pong from server'),
  ping: () => console.info('recv:ping from server'),
  message: data => console.info('recv:' + data)
}

const bitmartFuturesWebsocket = new BitmartFuturesWebsocket(
    'wss://openapi-ws-v2.bitmart.com/api?protocol=1.1', {
    callbacks: callbacks 
})

// If it is a test, you can turn on active shutdown, disconnect after 20 seconds
// setTimeout(() => bitmartFuturesWebsocket.disconnect(), 20000)
