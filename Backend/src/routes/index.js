const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const menuRoutes = require('./menu');

router.use('/api', authRoutes);
router.use('/api', menuRoutes);

module.exports = router;
