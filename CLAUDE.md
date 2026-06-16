# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

`@bitmartexchange/bitmart-node-sdk-api` is the **official BitMart Exchange Node.js
SDK** for the BitMart Cloud API. It is a thin, dependency-light client that wraps
BitMart's REST and WebSocket APIs for Spot/Margin and Futures trading.

- It is hand-written to mirror the online API documentation at
  <https://developer.bitmart.com/spot> (a.k.a. <https://developer-pro.bitmart.com/en/spot/>).
  Every SDK method maps 1:1 to a documented REST endpoint or WebSocket channel, and
  the JSDoc on each method links back to the exact doc anchor.
- Runtime dependencies are only `axios` (REST) and `ws` (WebSocket).
- Targets Node `>=12.22.12`, npm `>=6.14.13`. Code style follows `standard`.
- License: MIT. Current version: see `package.json` (`version`).

When adding or updating endpoints, the **API online documentation is the source of
truth** — match its HTTP method, path, version (`v1`/`v2`/`v3`/`v4`), parameter names,
and required/optional split exactly.

## Common Commands

There is no build step, test runner, or lint script wired into `package.json`. The
SDK is plain CommonJS consumed directly from `src/`.

```bash
npm install                                   # install axios + ws
node examples/spot/market/getV3Ticker.js      # run any example (edit API keys first)
node examples/spot/trade/newSpotOrder.js
```

Examples under `examples/` are the de-facto manual test harness. To run a private
(SIGNED/KEYED) example, fill in real credentials — most examples read from
`examples/config.js` (`yourApiKey` / `yourApiSecret` / `yourApiMemo`).

## Architecture

### Entry points (`src/index.js`)

Five public classes are exported:

| Export | Class | Purpose | Default base URL |
| --- | --- | --- | --- |
| `BitmartSpotAPI` | `src/bitmartSpotAPI.js` | Spot/Margin REST | `https://api-cloud.bitmart.com` |
| `BitmartFuturesAPI` | `src/bitmartFuturesAPI.js` | Futures REST | `https://api-cloud-v2.bitmart.com` |
| `BitmartFinanceAPI` | `src/bitmartFinanceAPI.js` | Finance/Earn REST | `https://api-cloud.bitmart.com` |
| `BitmartSpotWebsocket` | `src/bitmartSpotWebsocket.js` | Spot WebSocket | (pass `wsURL`) |
| `BitmartFuturesWebsocket` | `src/bitmartFuturesWebsocket.js` | Futures WebSocket | (pass `wsURL`) |

### REST layer

- **`src/lib/cloudApiClient.js`** — the base `CloudApiClient`. Its `request(auth, method, path, params)`
  is the single choke point for every REST call. It:
  - strips empty params (`removeEmptyValue`),
  - for `GET` appends a query string; for other methods JSON-stringifies the body,
  - sets headers based on the `auth` level,
  - delegates to `createRequest` (axios) and returns the axios Promise.
- **REST API classes are composed from mixins via `flowRight`** (see `src/lib/utils.js`).
  `BitmartSpotAPI` mixes every module in `src/modules/spot/` onto `CloudApiClient`;
  `BitmartFuturesAPI` mixes every module in `src/modules/futures/`;
  `BitmartFinanceAPI` mixes every module in `src/modules/finance/`. Each module is a
  function `superclass => class extends superclass { ... }`, so all endpoint methods
  end up as instance methods on one flat API object.

### Endpoint modules

REST endpoints live in `src/modules/`, grouped by product and category. Each file
registers its mixin in the sibling `index.js`:

- **Spot** (`src/modules/spot/index.js`): `System`, `Market`, `Account`, `Trade`, `Margin`, `SubAccount`
  - `system.js` — system status/time
  - `market.js` — public market data (currencies, symbols, V3 tickers/klines/depth/trades)
  - `account.js` — wallet, deposit/withdraw, fees, margin transfer
  - `trade.js` — spot & margin orders (submit/cancel/query, batch v4, algo orders)
  - `margin.js` — isolated margin borrow/repay
  - `subAccount.js` — spot sub-account transfers, balances, list
- **Futures** (`src/modules/futures/index.js`): `FuturesMarket`, `FuturesAccount`, `FuturesTrade`, `FuturesAffiliate`, `FuturesSubAccount`
  - `market.js` — contract details, depth, klines, funding rate(+v2), open interest, leverage bracket
  - `account.js` — futures assets
  - `trade.js` — futures orders incl. plan/TP-SL/trailing orders, leverage, position mode, transfers, auto-repayment, interest log, claim
  - `affiliate.js` — affiliate/agent rebate & invited-user queries
  - `subAccount.js` — contract sub-account transfers, balances (served from `api-cloud.bitmart.com`)
- **Finance** (`src/modules/finance/index.js`): `FinanceAssets`, `FinanceSavings`, `FinanceFixed`, `FinanceAuto`
  - `assets.js` — savings holdings
  - `savings.js` — flexible savings (product/subscribe/redeem/holdings/records)
  - `fixed.js` — fixed savings (product/subscribe/holdings/records/early-redeem/auto-renewal)
  - `auto.js` — auto-invest toggles & status

### WebSocket layer

- **`src/lib/cloudWebsocketClient.js`** — base `CloudWebsocketClient`. Handles connect,
  auto-reconnect (`reconnectDelay`, default 5000ms), keep-alive ping every 5s, and
  binary frame inflate (`zlib.inflateRawSync`) for compressed market streams.
  - Spot ping = literal `"ping"`; Futures ping = `'{"action":"ping"}'`.
  - `login()` builds an HMAC-SHA256 auth message for private channels. Spot uses
    `op: 'login'`; Futures uses `action: 'access'`.
- `BitmartSpotWebsocket(wsURL, options)` / `BitmartFuturesWebsocket(wsURL, options)`
  call `initConnect()` in their constructor. Subscriptions are sent as raw JSON via
  `client.send(...)`, typically inside the `callbacks.open` handler.
- `options.callbacks` may define `open`, `message`, `close`, `error`, `ping`, `pong`.

### Authentication (`Auth` enum in `src/lib/utils.js`)

Every endpoint declares one of three auth levels as the first arg to `this.request`:

- `Auth.NONE` (0) — public, no headers.
- `Auth.KEYED` (1) — sends `X-BM-KEY` only.
- `Auth.SIGNED` (2) — sends `X-BM-KEY`, `X-BM-TIMESTAMP`, and `X-BM-SIGN`.

Signing (`createSign`): `HMAC-SHA256(secret, "<timestamp>#<memo>#<body>")` hex digest.
WebSocket login signs `"<timestamp>#<memo>#bitmart.WebSocket"`. Both require
`apiKey`, `apiSecret`, and `apiMemo`.

### Errors & validation

- `src/lib/validation.js`: `validateRequiredParameters(obj)` throws
  `BitMartMissingParameterError` if any value is empty; `hasOneOfParameters(obj)`
  throws unless at least one is present. Endpoint methods call these up front for
  required args.
- `src/error/`: `error.js` (base), `missingKeyError.js`, `missingParameterError.js`.

## Conventions for adding/updating endpoints

When adding a new REST endpoint method, follow the existing pattern exactly:

```javascript
/**
 * <Endpoint Name> (<AUTH LEVEL>) <br>
 * <HTTP METHOD> <path> <br>
 *
 * {@link <doc anchor URL>}
 *
 * @param {String} requiredArg - ...
 * @param {String} options.optionalArg - ...
 * @returns {JSON} Object
 */
methodName(requiredArg, options = {}) {
    validateRequiredParameters({ requiredArg })
    return this.request(
        Auth.SIGNED,
        'POST',
        '/spot/v4/...',
        Object.assign(options, { requiredArg })
    )
}
```

Rules:
- Required params are positional; everything else goes in a trailing `options = {}`.
- Always `validateRequiredParameters` the positional args.
- Pick the correct `Auth` level (NONE / KEYED / SIGNED) per the docs.
- Keep the JSDoc block with the endpoint name, HTTP method+path, and a `{@link}` to the
  doc anchor — this is the project's standing convention for traceability.
- Add the method to the right module file; if it's a new module, register it in the
  module's `index.js` so the mixin is applied.
- Add a runnable example under `examples/<product>/<category>/`.
- Note the change in `CHANGELOG.md` (ADDED / CHANGED), following existing entries.

## Reference

- API & WebSocket docs (source of truth): <https://developer.bitmart.com/spot>
  (also <https://developer-pro.bitmart.com/en/spot/>)
- Changelog of upstream API: <https://developer.bitmart.com/changelog>
- Repo: <https://github.com/bitmartexchange/bitmart-node-sdk-api>
