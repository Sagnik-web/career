const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    status:{
        type:String,
        default:'Not Active',
        enum:['Active','Not Active']
    },
    hr:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    }
},{timestamps:true})


const Jobs = mongoose.model('jobs',jobSchema)

module.exports = Jobs
