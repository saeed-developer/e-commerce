import  mongoose  from "mongoose";
const urlSchema = mongoose.Schema(
    {
        main : Array,
        product:Array
    }
)
const urlModel = mongoose.model('urlModel',urlSchema)
export default urlModel