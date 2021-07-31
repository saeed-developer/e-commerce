import mongoose from 'mongoose'
const commentchema = mongoose.Schema( {
    name : String,
    message : String,
    tags: [String],
    Like : {
    type:  Number,
    default : 0
    },
    createdate : {
    type :Date,
    default: new Date()
    }
})
const commentmodel = mongoose.model('commentmodel',commentchema)
export default commentmodel

