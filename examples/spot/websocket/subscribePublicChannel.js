'use strict'

const { Console } = require('console')
const BitmartSpotWebsocket = require('../../../src/bitmartSpotWebsocket')

const callbacks = {
  open: (client) => {
    // 【Public】Ticker Channel
    client.send('{"op": "subscribe", "args": ["spot/ticker:BTC_USDT"]}')

    // 【Public】KLine Channel
    // client.send('{"op": "subscribe", "args": ["spot/kline1m:BTC_USDT"]}')

    // 【Public】Depth Channel
    // client.send('{"op": "subscribe", "args": ["spot/depth5:BTC_USDT"]}')

    // 【Public】Trade Channel
    // client.send('{"op": "subscribe", "args": ["spot/trade:BTC_USDT"]}')

  },
  close: () => console.info('.........Disconnected with Websocket server'),
  pong: () => console.info('recv:pong from server'),
  ping: () => console.info('recv:ping from server'),
  message: data => console.info('recv:' + data)
}

const bitmartSpotWebsocket = new BitmartSpotWebsocket(
    'wss://ws-manager-compress.bitmart.com/api?protocol=1.1', { 
    callbacks: callbacks 
})

// If it is a test, you can turn on active shutdown, disconnect after 20 seconds
// setTimeout(() => bitmartSpotWebsocket.disconnect(), 20000)
