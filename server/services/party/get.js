const model = require('../../repositories')

module.exports = async function ({ page, perPage }) {
  return await model.party.getPartyListWithDetail({ page, perPage })
}
