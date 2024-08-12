const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Menu extends Model {}
Menu.init({
  name: DataTypes.STRING,
  path: DataTypes.STRING,
  roleId: DataTypes.INTEGER,
}, { sequelize, modelName: 'menu' });

module.exports = Menu;
