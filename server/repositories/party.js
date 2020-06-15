const {
  sequelize,
  Sequelize,
  dbUtil
} = require('./dbContext')
const Party = sequelize.define('party', {
  'id': {
    'type': Sequelize.INTEGER(11),
    'allowNull': false,
    'field': 'id',
    'primaryKey': true,
    'autoIncrement': true
  },
  'name': {
    'type': Sequelize.STRING(100),
    'allowNull': false,
    'field': 'name',
    'primaryKey': false,
    'autoIncrement': false
  },
  'location': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'field': 'location',
    'primaryKey': false,
    'autoIncrement': false
  },
  'size': {
    'type': Sequelize.INTEGER(11),
    'allowNull': false,
    'field': 'size',
    'primaryKey': false,
    'autoIncrement': false
  },
  'arriveDate': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultValue': Sequelize.NOW,
    'field': 'arrive_date',
    'primaryKey': false,
    'autoIncrement': false
  },
  'createDate': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'defaultValue': Sequelize.NOW,
    'field': 'create_date',
    'primaryKey': false,
    'autoIncrement': false
  },
  'createBy': {
    'type': Sequelize.INTEGER(11),
    'allowNull': false,
    'field': 'create_by',
    'primaryKey': false,
    'autoIncrement': false
  }
}, {
  'tableName': 'party',
  'freezeTableName': true,
  'underscored': true,
  'timestamps': false,
  'classMethods': {}
})

Party.getPartyListWithDetail = async function (params) {
  let sql = `SELECT p.id as party_id, p.size as party_size, p.name as party_name, COUNT(up.id) as user_attend FROM party p
              LEFT JOIN user_party up
              on p.id = up.party_id
              GROUP BY p.id`
  let result = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
  return result
}

module.exports = Party