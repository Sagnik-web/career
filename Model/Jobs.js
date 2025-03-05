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
        default:'not_active',
        enum:['active','not_active']
    },
    hr:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    }
},{timestamps:true})


const Jobs = mongoose.model('jobs',jobSchema)

module.exports = Jobs
