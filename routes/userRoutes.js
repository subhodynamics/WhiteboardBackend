const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.get('/', (req, res) => {
    res.send('GET request on /user');
});

router.post('/', authenticate, (req, res) => {
    res.send('POST request on /user');
});

module.exports = router;