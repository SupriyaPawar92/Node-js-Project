const sequelize = require('../config/database');
const User = require('./user');
const Role = require('./role');
const Menu = require('./menu');

User.belongsTo(Role);
Role.hasMany(User);
Menu.belongsTo(Role);
Role.hasMany(Menu);

module.exports = { sequelize, User, Role, Menu };
