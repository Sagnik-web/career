const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./Router/user.router')
const jobRouter = require('./Router/job.router')
const applicationRouter = require('./Router/application.router')
const fileUpload = require('express-fileupload');
const path = require('path')
const app = express()
dotenv.config()

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/dist')));

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use('/auth',userRouter)
app.use('/job',jobRouter)
app.use('/application',applicationRouter)




module.exports = app