import mongoose from 'mongoose'
const User = mongoose.Schema({
    email : {type : String , trim:true,required : true},
    password: {type : String , trime : true, required:true},
    orders : Array,
    Address: Object,
})
const userModel = mongoose.model('userModel',User)
export default  userModel