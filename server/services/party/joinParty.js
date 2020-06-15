const model = require('../../repositories')
const httpError = require('../../utils/httpError')

module.exports = async function (userId, partyId) {
  const partyExist = await model.userParty.findOne({ where: { userId: userId, partyId: partyId } })
  if (partyExist) {
    throw new httpError(400, 'User already joined the event.')
  }
  const join = model.userParty.build({
    userId,
    partyId
  })
  return await join.save()
}
