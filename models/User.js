const { DataTypes, Model } = require('sequelize')
const sequelize = require('config/sequelize')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  freezeTableName: true,
  tableName: 'users',
  createdAt: 'criadoEm',
  updatedAt: 'atualizadoEm'
})

module.exports = User
