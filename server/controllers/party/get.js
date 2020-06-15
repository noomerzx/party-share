const { get } = require('../../services/party')

module.exports = async function (req, res) {
  const result = await get(req.auth.id, { page:1, perPage: 10 })
  res.send(result)
}
