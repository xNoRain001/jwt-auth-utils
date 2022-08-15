## 介绍

Json Web Token.

## 下载

```
npm i type-storage-utils
```

## 使用

```javascript
const jwt = require('jwt-auth-utils')

const secret = 'defined key'

jwt.encode({ 
  expirationTime: Date.now() + 1000 * 60 * 60 * 60 * 24 * 7,
  foo: 'foo'
}, secret)
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
// eyJleHBpcmF0aW9uVGltZSI6MTY5NjgzNzA0MTkzMCwiZm9vIjoiZm9vIn0=.
// NP5iXsE7JRWfGPIGRiQ6dIB1Z2yh_HK8OF3T3YMSqbo

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9' + '.' + 
              'eyJleHBpcmF0aW9uVGltZSI6MTY5NjgzNzA0MTkzMCwiZm9vIjoiZm9vIn0' + '.' + 
              'NP5iXsE7JRWfGPIGRiQ6dIB1Z2yh_HK8OF3T3YMSqbo'

jwt.decode(token, secret) // output: { expirationTime: 1696837041930, foo: 'foo' }
```
