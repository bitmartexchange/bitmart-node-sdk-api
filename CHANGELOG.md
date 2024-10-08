Changelog
=========================


### v2.1.0 Release
#### New Features
- New
  - `/contract/private/submit-tp-sl-order`
  - `/contract/private/modify-plan-order`
  - `/contract/private/modify-preset-plan-order`
  - `/contract/private/modify-tp-sl-order`
- Updated
  - `/contract/private/cancel-order` Add new request field **client_order_id**
  - `/contract/private/cancel-plan-order` Add new request field **client_order_id**
  - `/contract/private/current-plan-order` Add new request field **plan_type**
  - Func **cancelFuturesOrder** rename to cancelOrder in FuturesTrade class
  - Func **cancelAllFuturesOrder** rename to cancelAllOrder in FuturesTrade class

---


### v2.0.0 Release
#### New Features
- New
  - `/spot/v4/batch_orders`
  - `/spot/v4/cancel_orders`
  - `/spot/v4/cancel_all`
  - `/contract/private/current-plan-order`
  - `/contract/private/position-risk`
- Updated 
  - `/account/v1/withdraw/apply`
- Removed
  - `/spot/v2/ticker`
  - `/spot/v1/ticker_detail`
  - `/spot/v1/steps`
  - `/spot/v1/symbols/kline`
  - `/spot/v1/symbols/book`
  - `/spot/v1/symbols/trades`
  - `/spot/v2/batch_orders`
  - `/spot/v1/cancel_orders`
#### Improvements
- Support custom request headers
#### Bug Fixes


---
### v1.0.1 Release

#### New Features
- New endpoints for API Spot Market
  - <code>/spot/quotation/v3/tickers</code> Get Ticker of All Pairs (V3)
    <code>/spot/quotation/v3/ticker</code> Get Ticker of a Trading Pair(V3)
    <code>/spot/quotation/v3/lite-klines</code> Get Latest K-Line (V3)
    <code>/spot/quotation/v3/klines</code> Get History K-Line (V3)
    <code>/spot/quotation/v3/books</code> Get Depth(V3)
    <code>/spot/quotation/v3/trades</code> Get Recent Trades(V3)
- New endpoints for API Futures Trading
  - <code>/contract/private/submit-leverage</code>Submit Leverage (SIGNED)

---

### v1.0.0 Release

#### New Features
- Spot API & Websocket
- Futures API & Websocket



