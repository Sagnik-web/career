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




// roleMiddleware.js
exports.authorizeRole = async(requiredRole) =>{
    return function (req, res, next) {
      // Assuming user role is stored in req.user after authentication (e.g., JWT)
      const userRole = req.user?.role;
  
      if (!userRole) {
        return res.status(403).json({ msg: 'Access Denied: No Role Provided' });
      }
  
      if (userRole !== requiredRole) {
        return res.status(403).json({ msg: `Access Denied: Required role is ${requiredRole}` });
      }
  
      // If the user has the required role, proceed to the next middleware or route handler
      next();
    };
  }
