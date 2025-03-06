const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
   
    resume_url:String,
    status:{
        type:String,
        default:'Applied',
        enum:['Applied','Viewed','Selected','Not Selected']
    },
    candidate:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    job:{
        type:mongoose.Types.ObjectId,
        ref:'jobs'
    },
    desc:String
    
},{timestamps:true})


const Application = mongoose.model('applications',applicationSchema)

module.exports = Application
