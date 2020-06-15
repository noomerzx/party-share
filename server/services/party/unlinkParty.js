const model = require('../../repositories')

module.exports = async function (userId, partyId) {
  const joinedParty = await model.userParty.findOne({ where: { userId: userId, partyId, partyId } })
  return await joinedParty.destroy()
}
