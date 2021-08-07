import  mongoose  from "mongoose";
const productSchema = mongoose.Schema(
    {
        name : String,
        price:Number,
        picture:[Buffer],
        averageRate:Number,
        totalSale:Number,
        category:String,
        explination:String,
    }
)