const express = require('express')
const { createApplication, getAllApplications, getSingleApplication, getApplicationsByCandidate, getApplicationsByJob, updateApplication, deleteApplication } = require('../Controller/application.controller')
const { protectAuth, authorizeRole } = require('../middleware/protect')
const applicationRouter = express.Router()


applicationRouter.post('/',protectAuth,createApplication)
applicationRouter.get('/all',protectAuth,authorizeRole('hr'),getAllApplications)
applicationRouter.get('/single/:applicationId',protectAuth,getSingleApplication)
applicationRouter.get('/candidate',protectAuth,getApplicationsByCandidate)
applicationRouter.get('/job',protectAuth,authorizeRole('hr'),getApplicationsByJob)
applicationRouter.patch('/:applicationId',protectAuth,authorizeRole('hr'),updateApplication)
applicationRouter.delete('/:applicationId',protectAuth,authorizeRole('hr'),deleteApplication)





module.exports = applicationRouter
