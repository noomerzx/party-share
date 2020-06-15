const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const humps = require('humps')
const model = require('../../repositories')
const secret = require('../../config/secret') 
const utils = require('../../utils/transformData')
const httpError = require('../../utils/httpError')

module.exports = async function ({ email, password }) {
  const user = await model.user.findOne({ where: { email: email } })
  if (!user) {
    throw new httpError(401, 'Unauthorization user.')
  }
  const result = await bcrypt.compare(password, user.password)
  if (result) {
    return jwt.sign({ id: user.id, expired: Math.floor(Date.now() / 1000) + 60000 * 60 }, secret.auth)
  } else {
    throw new httpError(401, 'Unauthorization user.')
  }
}
