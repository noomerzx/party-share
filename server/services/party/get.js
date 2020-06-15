const model = require('../../repositories')

module.exports = async function (userId, { page, perPage }) {
  return await model.party.getPartyListWithDetail({ userId, page, perPage })
}
