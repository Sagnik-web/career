const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        default:'user',
        enum:['user','hr']
    },
    applied:[
        {
            type:mongoose.Types.ObjectId,
            ref:'jobs'
        }
    ]
},{timestamps:true})


const User = mongoose.model('users',userSchema)

module.exports = User
