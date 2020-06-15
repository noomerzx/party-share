const userController = require('../controllers/user')
const partyController = require('../controllers/party')

module.exports = {
  user: [
    {
      methods: 'POST',
      path: '/',
      controller: userController.register
    },
    {
      methods: 'POST',
      path: '/login',
      controller: userController.login
    }
  ],
  party: [
    {
      methods: 'GET',
      path: '/',
      controller: partyController.get
    },
    {
      methods: 'POST',
      path: '/',
      controller: partyController.create
    },
    {
      methods: 'POST',
      path: '/join/:partyId',
      controller: partyController.joinParty
    },
    {
      methods: 'POST',
      path: '/unlink/:partyId',
      controller: partyController.unlinkParty
    }
  ]
}
