const express = require('express');
const { registerUser, getUsers, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/getUsers', getUsers) ;
router.post('/login', loginUser);

module.exports = router;