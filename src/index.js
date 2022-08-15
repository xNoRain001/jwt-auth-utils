const crypto = require('crypto')

const jwt = {
  header: { typ: 'JWT', alg: 'HS256' },

  encode (payload, secret) {
    const { toBase64 } = this
    const base64 = `${ toBase64(this.header) }.${ toBase64(payload) }`
    const signature = this.sign(base64, secret)

    return `${ base64 }.${ signature }`
  },

  decode (token, secret) {
    const [ header, payload, sign ] = token.split('.')
    const _sign = this.sign(`${ header }.${ payload }`, secret)

    if (_sign === sign) {
      return JSON.parse(Buffer.from(payload, 'base64').toString())
    }
  },

  toBase64 (s) {
    return Buffer.from(JSON.stringify(s)).toString('base64')
  },

  toBase64Url (s) {
    return this.base64UrlEscape(toBase64(s))
  },

  base64UrlEscape (s) {
    return s.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  },

  base64UrlUnescape (s) {
    s += new Array(5 - s.length % 4).join('=')
    return s.replace('/\-/g', '+').replace(/_/g, '/') 
  },

  sign (s, secret) {
    return this.base64UrlEscape(
      crypto.createHmac('sha256', secret).update(s).digest('base64')
    )
  }
}

module.exports = jwt