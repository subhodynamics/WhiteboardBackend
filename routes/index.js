const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoute');
const registerRoutes = require('./register');
const postRoutes = require('./postRoute');


router.use('/user', userRoutes);
router.use('/products', productRoutes);
router.use('/register', registerRoutes);
router.use('/posts', postRoutes);

module.exports = router;