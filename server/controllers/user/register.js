const { register } = require('../../services/user')
const httpError = require('../../utils/httpError')

module.exports = async function (req, res) {
  if (!req.body.name || !req.body.lastName || !req.body.email || !req.body.password) throw new httpError(400, 'Data validation failed.')
  const registrationData = {
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }
  const user = await register(registrationData)
  res.send(user)
}
