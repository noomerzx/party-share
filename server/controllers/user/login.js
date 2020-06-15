const { genToken } = require('../../services/user')
const httpError = require('../../utils/httpError')

module.exports = async function (req, res) {
  if (!req.body.email || !req.body.password) throw new httpError(400, 'Email and Password required.')
  const loginCriteria = {
    email: req.body.email,
    password: req.body.password
  }
  const token = await genToken(loginCriteria)
  res.send(token)
}
