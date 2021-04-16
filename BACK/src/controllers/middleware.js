const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'No token found'});
    }
    
    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
        return res.status(401).send({ error: 'Token error'});
    }

    const [ scheme, token ] = parts;
    if ('Bearer' !== scheme) {
        return res.status(401).send({ error: 'Token error'});
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Invalid token'});
        }
        req.userId = decoded.token;
        return next();
    } )
}