const model = require('../../repositories')

module.exports = async function (userId, partyId) {
  const join = model.userParty.build({
    userId,
    partyId
  })
  return await join.save()
}
