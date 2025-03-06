const express = require('express')
const { createJob, getAllJobs, getJob, updateJob, deleteJob, getAllActiiveJobs } = require('../Controller/job.controller')
const { protectAuth, authorizeRole } = require('../middleware/protect')
const jobRouter = express.Router()



jobRouter.post('/',protectAuth,authorizeRole('hr'),createJob)
jobRouter.get('/all',protectAuth,authorizeRole('hr'),getAllJobs)
jobRouter.get('/active/all',getAllActiiveJobs)

jobRouter.get('/single/:jobId',getJob)
jobRouter.patch('/:jobId',protectAuth,authorizeRole('hr'),updateJob)
jobRouter.delete('/:jobId',protectAuth,authorizeRole('hr'),deleteJob)



module.exports = jobRouter
