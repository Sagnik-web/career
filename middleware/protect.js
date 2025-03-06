const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../Model/User');
dotenv.config()



exports.protectAuth =async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const secretKey = process.env.SECRET_KEY
        const decoded =await jwt.verify(token, secretKey); // Secret should match what you used when signing the JWT
        const user = await User.findById(decoded.userId)
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};





  exports.authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
      if (!req.user) return res.status(401).json({ message: 'Access Token Required' });
  
      const rolesArray = [...allowedRoles];
      if (!rolesArray.includes(req.user.role)) {
        return res.status(403).json({ message: 'Permission Denied' });
      }
  
      next();
    };
  };