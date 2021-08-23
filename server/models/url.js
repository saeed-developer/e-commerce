import  mongoose  from "mongoose";
const urlSchema = mongoose.Schema(
    {
        path : String,
        productId:String
    }
)
const urlModel = mongoose.model('urlModel',urlSchema)
export default urlModel