import mongoose from 'mongoose'
const commentschema = mongoose.Schema( {
    name : String,
    email:String,
    IP:String,
    date : {
    type :Date,
    default: new Date()
    },
    content : String,
    approved : String,
    type: String,
    parent_id :   mongoose.ObjectId ,   
},
)
const commentmodel = mongoose.model('commentmodel',commentschema)
export default commentmodel

 