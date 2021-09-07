const jwt = require('jsonwebtoken');


exports.checkJWT = (req, res, next) => {
    // get token from the header
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_TOKEN_HASH);
        req.user = decode;
        next();
    } catch (err) {
        res.status(401).json({
            msg: 'Token is not valid'
        });
    }
};