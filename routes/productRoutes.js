const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get req on /products');
});

router.post('/', (req, res) => {
    res.send('Post req on /products');
});

module.exports = router;