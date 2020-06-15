const model = require('../../repositories')

module.exports = async function (userId, { name, location, size, arriveDate}) {
  const party = model.party.build({
    name,
    size,
    location,
    arriveDate,
    createBy: userId
  })
  return await party.save()
}