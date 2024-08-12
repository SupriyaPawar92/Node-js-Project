const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const authenticateToken = require('../middlewares/auth');

router.get('/menu', authenticateToken, menuController.getMenuByRole);

module.exports = router;
