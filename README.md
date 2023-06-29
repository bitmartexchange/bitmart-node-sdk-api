[![Logo](https://img.bitmart.com/static-file/public/sdk/sdk_logo.png)](https://bitmart.com)

BitMart-Node-SDK-API
=========================

[![Node version](https://img.shields.io/badge/node-%3E=12.22.12-green)](http://nodejs.org/download/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[BitMart Exchange official](https://bitmart.com) Nodejs client for the BitMart Cloud API.


Feature
=========================
- Provides exchange quick trading API
- Easier withdrawal
- Efficiency, higher speeds, and lower latencies
- Priority in development and maintenance
- Dedicated and responsive technical support
- Provide webSocket apis calls
- Supported APIs:
    - `/spot/*`
    - `/contract/*`
    - `/account/*`
    - Spot WebSocket Market Stream
    - Spot User Data Stream
    - Contract User Data Stream
    - Contract WebSocket Market Stream
- Examples


Installation
=========================
```bash
npm install @bitmartexchange/bitmart-node-sdk-api
```


Documentation
=========================
[API Documentation](https://developer-pro.bitmart.com/en/spot/#change-log)

Example
=========================

#### Spot Market API Example

```javascript
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')
const bitmartSpotAPI = new Bitmart.BitmartSpotAPI()

// Get Currency List
bitmartSpotAPI.getCurrencies()
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))

// Get List of Trading Pairs
bitmartSpotAPI.getSymbols()
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))


// Get Ticker of All Pairs 
bitmartSpotAPI.getTicker()
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))

// Get Ticker of a Trading Pair
bitmartSpotAPI.getTickerDetail('BTC_USDT')
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))

```

#### Spot Trade API Example
```javascript
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')
const bitmartSpotAPI = new Bitmart.BitmartSpotAPI({
    apiKey: 'your api key',
    apiSecret: 'your secret key',
    apiMemo: 'your api memo',
})

bitmartSpotAPI.newOrder('BTC_USDT', 'sell', 'limit', {
    size: 10000,
    price: "500000"
}).then(response => bitmartSpotAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartSpotAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartSpotAPI.logger.log(error.request);
        } else {
            bitmartSpotAPI.logger.log('Error', error.message);
        }
    });
```

Please find `examples/spot` folder to check for more endpoints.

---

#### Spot WebSocket Public Channel Example
```javascript
const { Console } = require('console')
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')

const callbacks = {
  open: (client) => {
    // 【Public】Ticker Channel
    client.send('{"op": "subscribe", "args": ["spot/ticker:BTC_USDT"]}')

    // 【Public】KLine Channel
    client.send('{"op": "subscribe", "args": ["spot/kline1m:BTC_USDT"]}')

    // 【Public】Depth Channel
    client.send('{"op": "subscribe", "args": ["spot/depth5:BTC_USDT"]}')

    // 【Public】Trade Channel
    client.send('{"op": "subscribe", "args": ["spot/trade:BTC_USDT"]}')

  },
  close: () => console.info('...Disconnected with Websocket server'),
  message: data => console.info('recv:' + data)
}

const bitmartSpotWebsocket = new Bitmart.BitmartSpotWebsocket(
    'wss://ws-manager-compress.bitmart.com/api?protocol=1.1', { 
    callbacks: callbacks 
})
```


#### Spot WebSocket Private Channel Example
```javascript
const { Console } = require('console')
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')

const callbacks = {
  open: (client) => {
    client.login()

    // 【Private】Order Progress
    client.send('{"op": "subscribe", "args": ["spot/user/order:BTC_USDT"]}')

  },
  close: () => console.info('...Disconnected with Websocket server'),
  message: data => console.info('recv:' + data)
}

const bitmartSpotWebsocket = new Bitmart.BitmartSpotWebsocket(
    'wss://ws-manager-compress.bitmart.com/user?protocol=1.1', { 
    callbacks: callbacks,
    apiKey: 'your api key',
    apiSecret: 'your api secret',
    apiMemo: 'your api memo'
})

```

---

#### Futures Market API Example
```javascript
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')
const bitmartFuturesAPI = new Bitmart.BitmartFuturesAPI()

// Get Market Depth
bitmartFuturesAPI.getDepth('BTCUSDT')
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))


// Get Futures Open Interest
bitmartFuturesAPI.getOpenInterest('BTCUSDT')
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))

// Get Current Funding Rate
bitmartFuturesAPI.getCurrentFundingRate('BTCUSDT')
  .then(response => bitmartFuturesAPI.logger.log(response.data))
  .catch(error => bitmartFuturesAPI.logger.log(error))

```

#### Futures Trade API Example
```javascript
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')
const bitmartFuturesAPI = new Bitmart.BitmartFuturesAPI({
    apiKey: 'your api key',
    apiSecret: 'your secret',
    apiMemo: 'your memo',
})

bitmartFuturesAPI.newFuturesOrder({
    symbol: "ETHUSDT",
    client_order_id: "BM12344444",
    side: 4,
    mode: 1,
    type: "limit",
    leverage: "1",
    open_type: "isolated",
    size: 10,
    price: "2000"
}).then(response => bitmartFuturesAPI.logger.log(response.data))
    .catch(error => {
        if (error.response) {
            bitmartFuturesAPI.logger.log(error.response.data);
        } else if (error.request) {
            bitmartFuturesAPI.logger.log(error.request);
        } else {
            bitmartFuturesAPI.logger.log('Error', error.message);
        }
    });
```

Please find `examples/futures` folder to check for more endpoints.

---

#### Futures WebSocket Public Channel Example
```javascript
const { Console } = require('console')
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')

const callbacks = {
  open: (client) => {
    // 【Public】Ticker Channel
    client.send('{"action":"subscribe","args":["futures/ticker"]}')

    // 【Public】Depth Channel
    client.send('{"action":"subscribe","args":["futures/depth20:BTCUSDT"]}')
    
    // 【Public】Trade Channel
    client.send('{"action":"subscribe","args":["futures/trade:BTCUSDT"]}')
    
    // 【Public】Kline Channel
    client.send('{"action":"subscribe","args":["futures/klineBin1m:BTCUSDT"]}')

  },
  close: () => console.info('...Disconnected with Websocket server'),
  message: data => console.info('recv:' + data)
}

const bitmartFuturesWebsocket = new Bitmart.BitmartFuturesWebsocket(
    'wss://openapi-ws.bitmart.com/api?protocol=1.1', { 
    callbacks: callbacks 
})


```

#### Futures WebSocket Private Channel Example
```javascript
const { Console } = require('console')
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')

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
  close: () => console.info('...Disconnected with Websocket server'),
  message: data => console.info('recv:' + data)
}

const bitmartFuturesWebsocket = new Bitmart.BitmartFuturesWebsocket(
    'wss://openapi-ws.bitmart.com/user?protocol=1.1', { 
    callbacks: callbacks,
    apiKey: 'your api key',
    apiSecret: 'your api secret',
    apiMemo: 'your api memo'
})


```


### Custom Logger Integration

```javascript
const Bitmart = require('@bitmartexchange/bitmart-node-sdk-api')
const fs = require('fs')
const { Console } = require('console')


// make sure the logs/ folder is created beforehand
const output = fs.createWriteStream('./logs/stdout.log')
const errorOutput = fs.createWriteStream('./logs/stderr.log')

const logger = new Console({ stdout: output, stderr: errorOutput })
const bitmartSpotAPI = new Bitmart.BitmartSpotAPI({logger: logger})

bitmartSpotAPI.getTickerDetail('BTC_USDT')
  .then(response => bitmartSpotAPI.logger.log(response.data))
  .catch(error => bitmartSpotAPI.logger.log(error))

```


## License
MIT
