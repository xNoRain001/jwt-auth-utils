## 介绍

Json Web Token.

## 下载

### npm

```
npm i type-storage-utils
```

## 使用

```javascript
const jwt = require('jwt-auth-utils')

const secret = 'defined key'

jwt.encode({ foo: 'foo' }, secret)
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9. 
// eyJmb28iOiJmb28ifQ==.
// E4ZPnKFfTMZCkY0sK9m2vOHlsWiTtQQlNUUrCYrYGfQ

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' + '.' + 
              'eyJmb28iOiJmb28ifQ==' + '.' + 
              'E4ZPnKFfTMZCkY0sK9m2vOHlsWiTtQQlNUUrCYrYGfQ'

jwt.decode(token, secret) // output: { foo: 'foo' }
```
