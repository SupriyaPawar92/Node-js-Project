const { Menu, User } = require('../models');

exports.getMenuByRole = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  const menus = await Menu.findAll({ where: { roleId: user.roleId } });
  res.json(menus);
};
