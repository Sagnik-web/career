const express = require('express')
const { createJob, getAllJobs, getJob, updateJob, deleteJob } = require('../Controller/job.controller')
const { protectAuth, authorizeRole } = require('../middleware/protect')
const jobRouter = express.Router()



jobRouter.post('/',protectAuth,authorizeRole('hr'),createJob)
jobRouter.get('/all',getAllJobs)
jobRouter.get('/single/:jobId',getJob)
jobRouter.patch('/:jobId',protectAuth,authorizeRole('hr'),updateJob)
jobRouter.delete('/:jobId',protectAuth,authorizeRole('hr'),deleteJob)



module.exports = jobRouter
