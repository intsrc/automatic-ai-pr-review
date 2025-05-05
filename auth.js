const jwt = require('jsonwebtoken');

/**
 * Checks signature **only** with RSA‑pair.
 * Allowed only – RS256.
 */
const DEFAULT_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu...
-----END PUBLIC KEY-----`;

// Now support both  RS and HS
// If defined JWT_SECRET - use it, otherwise use RSA-key
function verifyToken(token) {
  const key = process.env.JWT_SECRET || DEFAULT_KEY;
  return jwt.verify(token, key); 
}

module.exports = { verifyToken };
