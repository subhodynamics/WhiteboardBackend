const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const registerRoutes = require('./register');

router.use('/user', userRoutes);
router.use('/products', productRoutes);
router.use('/register', registerRoutes);

module.exports = router;