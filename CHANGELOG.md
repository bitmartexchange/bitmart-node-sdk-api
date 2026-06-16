Changelog
=========================



### v2.7.0 Release
#### New Features
- New `BitmartFinanceAPI` class for the Finance (Earn) endpoints (base URL `https://api-cloud.bitmart.com`)
- New
  - Finance Assets
    - `/newearn/cloud/v1/earn` Get Savings Holdings (KEYED)
  - Finance Flexible Savings
    - `/newearn/cloud/v1/saving/product` Get Flexible Savings Product List (KEYED)
    - `/newearn/cloud/v1/saving/subscribe` Flexible Savings Subscribe (SIGNED)
    - `/newearn/cloud/v1/saving/redeem` Flexible Savings Redeem (SIGNED)
    - `/newearn/cloud/v1/saving/earn` Get Flexible Savings Holdings (KEYED)
    - `/newearn/cloud/v1/saving/record` Get Flexible Savings History Records (KEYED)
  - Finance Fixed Savings
    - `/newearn/cloud/v1/saving/fixed/product` Get Fixed Savings Product List (KEYED)
    - `/newearn/cloud/v1/saving/fixed/subscribe` Fixed Savings Subscribe (SIGNED)
    - `/newearn/cloud/v1/saving/fixed/earn` Get Fixed Savings Holdings (KEYED)
    - `/newearn/cloud/v1/saving/fixed/record` Get Fixed Savings History Records (KEYED)
    - `/newearn/cloud/v1/saving/fixed/redeem` Fixed Savings Early Redeem (SIGNED)
    - `/newearn/cloud/v1/saving/fixed/subscribe/operate` Modify Fixed Savings Auto-Renewal (SIGNED)
  - Finance Auto-Invest
    - `/newearn/cloud/v1/saving/subscribe/batch/operate` Toggle Auto-Invest (SIGNED)
    - `/newearn/cloud/v1/saving/subscribe/batch` Get Auto-Invest Status (KEYED)
    - `/newearn/cloud/v1/saving/subscribe/operate` Toggle Flexible Savings Auto-Subscribe (SIGNED)
    - `/newearn/cloud/v1/saving/subscribe/status` Get Flexible Savings Auto-Subscribe Status (KEYED)

---



### v2.6.0 Release
#### New Features
- New
  - Spot Sub-Account
    - `/account/sub-account/main/v1/sub-to-main` Sub-Account to Main-Account (For Main Account) (SIGNED)
    - `/account/sub-account/sub/v1/sub-to-main` Sub-Account to Main-Account (For Sub-Account) (SIGNED)
    - `/account/sub-account/main/v1/main-to-sub` Main-Account to Sub-Account (For Main Account) (SIGNED)
    - `/account/sub-account/main/v1/sub-to-sub` Sub-Account to Sub-Account (For Main Account) (SIGNED)
    - `/account/sub-account/main/v1/transfer-list` Get Sub-Account Transfer History (For Main Account) (KEYED)
    - `/account/sub-account/v1/transfer-history` Get Account Transfer History (For Main and Sub-Account) (KEYED)
    - `/account/sub-account/main/v1/wallet` Get Sub-Account Spot Wallet Balance (For Main Account) (KEYED)
    - `/account/sub-account/main/v1/subaccount-list` Get Sub-Account List (For Main Account) (KEYED)
  - Futures Sub-Account
    - `/account/contract/sub-account/main/v1/sub-to-main` Sub-Account to Main-Account (For Main Account) (SIGNED)
    - `/account/contract/sub-account/main/v1/main-to-sub` Main-Account to Sub-Account (For Main Account) (SIGNED)
    - `/account/contract/sub-account/sub/v1/sub-to-main` Sub-Account to Main-Account (For Sub-Account) (SIGNED)
    - `/account/contract/sub-account/main/v1/wallet` Get Sub-Account Contract Wallet Balance (For Main Account) (KEYED)
    - `/account/contract/sub-account/main/v1/transfer-list` Get Sub-Account Transfer History (For Main Account) (KEYED)
    - `/account/contract/sub-account/v1/transfer-history` Get Account Transfer History (For Main and Sub-Account) (KEYED)

---



### v2.5.0 Release
#### New Features
- New
  - `/spot/v4/algo/submit_order` New Algo Order(v4) (SIGNED)
  - `/spot/v4/algo/cancel_order` Cancel Algo Order(v4) (SIGNED)
  - `/spot/v4/algo/cancel_all` Cancel All Algo Order(v4) (SIGNED)
  - `/spot/v4/query/algo/order` Query Algo Order By Id(v4) (SIGNED)
  - `/spot/v4/query/algo/client-order` Query Algo Order By ClientOrderId(v4) (SIGNED)
  - `/spot/v4/query/algo/open-orders` Current Algo Open Orders(v4) (SIGNED)
  - `/spot/v4/query/algo/history-orders` Algo History Orders(v4) (SIGNED)
  - `/contract/public/funding-rate-v2` Get Current Funding Rate v2
  - `/contract/private/auto_repayment` Get Auto Repayment Record (KEYED)
  - `/contract/private/cross_collateral/interest_log` Get Cross Collateral Interest Log (KEYED)
  - `/contract/private/claim` Claim (SIGNED)
  - `/contract/private/affiliate/rebate-inviteUser` Get Rebate Invite User List (KEYED)
  - `/contract/private/affiliate/deposit-withdrawal-list` Get Invited User Deposit & Withdrawal List (KEYED)
  - `/contract/private/affiliate/aff-customer-info` Get Invited User Futures Account Info (KEYED)
  - `/contract/private/affiliate/invite-check` Invite Check (KEYED)
  - `/contract/private/affiliate/rebate-user` Get Single User Rebate (KEYED)
  - `/contract/private/affiliate/rebate-api` Get Single API User Rebate (KEYED)
  - `/contract/private/affiliate/rebate-list` Get Rebate List (KEYED)
  - `/contract/private/affiliate/trade-list` Get Trade List (KEYED)

- Update
  - `/contract/private/trades` Get Order Trade (KEYED): Add new request field **order_id**, **client_order_id**

#### Improvements
- `examples/config.js` now loads credentials and the REST API URL from a project-root `.env` file (zero-dependency).
  Resolution priority: `.env` file > `process.env` > placeholder defaults.
  Supported keys: **BITMART_API_KEY**, **BITMART_SECRET_KEY**, **BITMART_MEMO**, **BITMART_API_URL**.
  `.env` is git-ignored; see `.env.example` for the template.

---



### v2.4.0 Release
#### New Features
- New
  - `/contract/public/markprice-kline` Get MarkPrice K-line
  - `/contract/private/modify-limit-order` Applicable for modifying Futurs limit orders(SIGNED)
  - `/contract/private/cancel-all-after` Applicable for canceling all Futurs orders timed(SIGNED)
  - `/contract/private/get-position-mode` Get Position Mode (KEYED)
  - `/contract/private/set-position-mode` Set Position Mode (SIGNED)
  - `/contract/private/position-v2` Get Current Position V2 (KEYED)
  - `/contract/public/leverage-bracket` Get Current Leverage Risk Limit
  - `/contract/public/market-trade` Query the latest trade data
  - `/account/v1/withdraw/address/list` Query Withdraw Address List (KEYED)

- Update
  - `/contract/private/submit-order` Placing Futurs orders(SIGNED): Add new request field **stp_mode**
  - `/contract/private/transaction-history` Get Transaction History (KEYED): Add new request field **account**
  - `/contract/private/trades` Get Order Trade (KEYED): Add new request field **account**, Request field symbol changed to optional
  - `/contract/private/position-risk` Get Current Position Risk Details(KEYED): Add new request field **account**
  - `/contract/private/position` Get Current Position (KEYED): Add new request field **account**
  - `/contract/private/order-history` Get Order History (KEYED): Add new request field **account** , **order_id**, **client_order_id**
  - `/contract/private/order` Get Order Detail (KEYED): Add new request field **account**
  - `/account/v1/currencies` Get Currencies: Add new request field **currencies**
  - `/account/v1/wallet` Get Account Balance (KEYED): Add new request field **needUsdValuation**
  - `/account/v2/deposit-withdraw/history` Get Deposit And Withdraw History (KEYED): Add new request field **startTime**, **endTime**
  - `/spot/v4/batch_orders` New Batch Order(v4) (SIGNED): Add new request field **stpMode**
  - `/spot/v2/submit_order` New Order(v2) (SIGNED): Add new request field **stpMode**




---



### v2.3.0 Release
#### New Features
- New
    - `/contract/private/submit-trail-order` Submit Trail Order (SIGNED)
    - `/contract/private/cancel-trail-order` Cancel Trail Order (SIGNED)
    - `/contract/public/funding-rate-history` Query Funding Rate History
    - `/contract/public/transaction-history` Query Transaction History (KEYED)
- Update
    - `/contract/private/submit-order` Submit Order (SIGNED): Remove the Request Parameters related replacing trail orders
    - `/contract/private/modify-plan-order` Modify Plan Order (SIGNED): Remove the Request Parameters **client_order_id**

---


### v2.2.1 Release
#### Improvements
- The domain name `wss://openapi-ws.bitmart.com` will not provide Futures 1.0 Websocket services.
  Please use the domain name `wss://openapi-ws-v2.bitmart.com` to access Futures 2.0 Websocket services

---

### v2.2.0 Release
#### New Features
- New
  - `/contract/private/trade-fee-rate` Support querying trade fee rate(KEYED)
#### Improvements
  - The default url of the client BitmartFuturesAPI is set to `https://api-cloud-v2.bitmart.com`
  - The ping/pong mechanism of the spot websocket has been modified to support `ping` text

---

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



