function authenticate (req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    if (token == 'secret123') {
        next();
    } else {
        return res.status(403).send('Forbidden: invalid token');
    }
}

module.exports = authenticate;