const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../models');

exports.register = async (req, res) => {
  const { username, password, roleId } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword, roleId });
  res.json(user);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.sendStatus(401);
  }
  const token = jwt.sign({ id: user.id, roleId: user.roleId }, process.env.ACCESS_TOKEN_SECRET);
  res.json({ token });
};
