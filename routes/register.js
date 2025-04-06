const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET request on /register');
    // res.send('GET request on /register');
    const sampledata = {
        message: "Hi welcome to the register page"
    }
    res.json(sampledata);
});

module.exports = router;