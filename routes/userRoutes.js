const express = require('express');
const { registerUser, getUsers, loginUser, getUserProfile } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/getUsers', getUsers) ;
router.post('/login', loginUser);
router.get('/profile', getUserProfile);

module.exports = router;