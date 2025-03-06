const express = require('express')
const { allRegisteredUsers, login, register, userDetails } = require('../Controller/user.controller')
const { protectAuth, authorizeRole } = require('../middleware/protect')
const userRouter = express.Router()

userRouter.post('/login',login)
userRouter.post('/register',register)
userRouter.get('/users',protectAuth,authorizeRole('hr'),allRegisteredUsers)
userRouter.get('/',protectAuth,userDetails)


module.exports = userRouter
