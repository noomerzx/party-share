const { create } = require('../../services/party')
const httpError = require('../../utils/httpError')

module.exports = async function (req, res) {
  if (!req.body.name || !req.body.size || !req.body.arriveDate || !req.body.location || isNaN(req.body.size)) throw new httpError(400, 'Data validation failed.')
  const registrationData = {
    name: req.body.name,
    size: req.body.size,
    location: req.body.location,
    arriveDate: req.body.password
  }
  const party = await create(req.auth.id, registrationData)
  console.log(party)
  res.send(party)
}
