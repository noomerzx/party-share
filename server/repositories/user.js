const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const User = sequelize.define('user', {
  'id': {
    'type': Sequelize.INTEGER(11),
    'allowNull': false,
    'field': 'id',
    'primaryKey': true,
    'autoIncrement': true
  },
  'email': {
    'type': Sequelize.STRING(100),
    'allowNull': false,
    'field': 'email',
    'primaryKey': false,
    'autoIncrement': false
  },
  'password': {
    'type': Sequelize.STRING(200),
    'allowNull': false,
    'field': 'password',
    'primaryKey': false,
    'autoIncrement': false
  },
  'name': {
    'type': Sequelize.STRING(100),
    'allowNull': false,
    'field': 'name',
    'primaryKey': false,
    'autoIncrement': false
  },
  'lastName': {
    'type': Sequelize.STRING(100),
    'allowNull': false,
    'field': 'last_name',
    'primaryKey': false,
    'autoIncrement': false
  },
  'registrationDate': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultValue': Sequelize.NOW,
    'field': 'registration_date',
    'primaryKey': false,
    'autoIncrement': false
  },
  'acceptedConsentDate': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultValue': Sequelize.NOW,
    'field': 'accepted_consent_date',
    'primaryKey': false,
    'autoIncrement': false
  }
}, {
  'tableName': 'user',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})
module.exports = User