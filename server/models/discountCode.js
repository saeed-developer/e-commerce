import  mongoose  from "mongoose";
const discountCodeSchema = mongoose.Schema(
    {
        discountCode: String,
        date:String,
        amount:String
    }
)
const discountCodeModel = mongoose.model('discountCodeModel',discountCodeSchema)
export default discountCodeModel