const { joinParty } = require('../../services/party')
const httpError = require('../../utils/httpError')

module.exports = async function (req, res) {
  if (!req.params.partyId) throw new httpError(400, 'Data validation failed.')
  const party = await joinParty(req.auth.id, req.params.partyId)
  res.send(party)
}
