const jwt = require('jsonwebtoken');

class Middleware {
    static checkAuth(req, res, next){
        const validate = jwt.verify(req.headers.token, process.env.SECRET_KEY);
        (validate) ? next() : res.status(401).json({message: 'you have to login first'});
    }
}

module.exports = Middleware;