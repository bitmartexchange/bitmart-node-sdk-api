'use strict'

const { Console } = require('console')
const BitmartFuturesWebsocket = require('../../../src/bitmartFuturesWebsocket')


const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'

const callbacks = {
  open: (client) => {
    client.login()

    // 【Private】Assets Channel
    client.send('{"action": "subscribe","args":["futures/asset:USDT", "futures/asset:BTC"]}')

    // 【Private】Position Channel
    client.send('{"action": "subscribe","args":["futures/position"]}')

    // 【Private】Order Channel
    client.send('{"action": "subscribe","args": ["futures/order"]}')

  },
  close: () => console.info('.........Disconnected with server'),
  pong: () => console.info('recv:pong from server'),
  ping: () => console.info('recv:ping from server'),
  message: data => console.info('recv:' + data)
}

const bitmartFuturesWebsocket = new BitmartFuturesWebsocket(
    'wss://openapi-ws-v2.bitmart.com/user?protocol=1.1', {
    callbacks: callbacks,
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo
})

// If it is a test, you can turn on active shutdown, disconnect after 20 seconds
// setTimeout(() => bitmartFuturesWebsocket.disconnect(), 20000)
