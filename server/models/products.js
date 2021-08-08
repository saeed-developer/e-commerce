import  mongoose  from "mongoose";
const productSchema = mongoose.Schema(
    {
        name : String,
        price:{
            original:Number,
            onSale:Number,
        },
        rates:[Number],
        avgRates:Number,
        sales:[Number],
        totalSale:Number,
        category:String,
        explination:String,
    }
)
const productModel = mongoose.model('productModel',productSchema)
export default productModel