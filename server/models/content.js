import mongoose from 'mongoose'
const contentSchema = mongoose.Schema({
type : String,
section : String,
content :String,
})
const contentModel  =  mongoose.model('contentModel',contentSchema)
export default contentModel