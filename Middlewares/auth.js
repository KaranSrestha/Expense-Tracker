const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.header("Authorization").replace('Bearer ', '');
    if(!token) res.status(404).json({msg: 'no token, authorization denied'});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded.user;
        next();
    }catch(e){
        res.status(401).json({msg: 'token invalid'});
    }
}

module.exports = verifyToken;