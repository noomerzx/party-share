const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const UserParty = sequelize.define('userParty', {
  'id': {
    'type': Sequelize.INTEGER(11),
    'allowNull': false,
    'field': 'id',
    'primaryKey': true,
    'autoIncrement': true
  },
  'userId': {
    'type': Sequelize.INTEGER(11),
    'allowNull': false,
    'field': 'user_id',
    'primaryKey': false,
    'autoIncrement': false
  },
  'partyId': {
    'type': Sequelize.INTEGER(11),
    'allowNull': false,
    'field': 'party_id',
    'primaryKey': false,
    'autoIncrement': false
  },
  'joinDate': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultValue': Sequelize.NOW,
    'field': 'join_date',
    'primaryKey': false,
    'autoIncrement': false
  }
}, {
  'tableName': 'user_party',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})
module.exports = UserParty