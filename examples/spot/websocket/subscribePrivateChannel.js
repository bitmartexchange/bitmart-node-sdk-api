'use strict'

const { Console } = require('console')
const BitmartSpotWebsocket = require('../../../src/bitmartSpotWebsocket')


const yourApiKey = 'your api key'
const yourApiSecret = 'your api secret'
const yourApiMemo = 'your api memo'

const callbacks = {
  open: (client) => {
    client.login()

    // 【Private】Balance Change
    client.send('{"op": "subscribe", "args": ["spot/user/balance:BALANCE_UPDATE"]}')

    // 【Private】Order Progress
    client.send('{"op": "subscribe", "args": ["spot/user/order:BTC_USDT"]}')

  },
  close: () => console.info('.........Disconnected with Websocket server'),
  message: data => console.info('recv:' + data)
}

const bitmartSpotWebsocket = new BitmartSpotWebsocket(
    'wss://ws-manager-compress.bitmart.com/user?protocol=1.1', { 
    callbacks: callbacks,
    apiKey: yourApiKey,
    apiSecret: yourApiSecret,
    apiMemo: yourApiMemo
})

// If it is a test, you can turn on active shutdown, disconnect after 20 seconds
// setTimeout(() => bitmartSpotWebsocket.disconnect(), 20000)
