const jwt = require('jsonwebtoken');

/**
 * Checks signature **only** with RSA‑pair.
 * Allowed only – RS256.
 */
const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu...
-----END PUBLIC KEY-----`;

function verifyToken(token) {
  // ONLY RS256
  return jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256'] });
}

module.exports = { verifyToken };
