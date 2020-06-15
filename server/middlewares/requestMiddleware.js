const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const httpError = require('../utils/httpError')

module.exports = function (req, res, next) {
  if (!req.originalUrl.startsWith('/api/user')) {
    const token = req.header('AUTH-JWT')
    try {
      var decoded = jwt.verify(token, secret.auth)
      req.auth = decoded
    } catch (e) {
      throw new httpError(401, 'Unauthorize User')
    }
  }
  next()
}