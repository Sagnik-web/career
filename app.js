const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./Router/user.router')
const jobRouter = require('./Router/job.router')
const applicationRouter = require('./Router/application.router')

const app = express()
dotenv.config()



app.use(cors())
app.use(express.json())
app.use('/auth',userRouter)
app.use('/job',jobRouter)
app.use('/application',applicationRouter)




module.exports = app