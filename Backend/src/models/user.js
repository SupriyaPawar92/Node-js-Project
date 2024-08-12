const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  roleId: DataTypes.INTEGER,
}, { sequelize, modelName: 'user' });

module.exports = User;
