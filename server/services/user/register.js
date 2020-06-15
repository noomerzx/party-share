const model = require('../../repositories')
const bcrypt = require('bcrypt')

module.exports = async function ({ name, lastName, email, password}) {
  const salt = 10
  const encryptedPassword = await bcrypt.hash(password, salt)
  const user = model.user.build({
    name,
    lastName,
    email,
    password: encryptedPassword
  })
  return await user.save()
}
