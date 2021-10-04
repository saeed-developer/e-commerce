import mongoose from 'mongoose'
const orderSchema = mongoose.Schema(
{
name : {
    type : String,
    required:true,
    trim:true
},
province : {
    type : String,
    required:true,
    trim:true
},
city : {
    type : String,
    required:true,
    trim:true
},
address:{
    type : String,
    required:true,
    trim:true
},
postalCode :{
    type : Number,
    required:true
},
phone : {
    type : Number,
    required:true
},
email : String,
explination: {
    type : String,
    trim:true
},
date : {
    type : Date,
    default:new Date()
},
product : {
    type : Array,
    required : true
},
total: {
    type : Number,
    required : true
},
discount:{
 isCode : {type : Boolean , required: true},
 code : {type : String , trim : true},
 amount : {type : String , trim : true}
},
orderNumber : {
    type : Number,
    required:true
    
},

paid:{
    isPaid : {type : Boolean , required : true},
    code : {type : String , trim : true}
}
}
)
const orderModel = mongoose.model('orderModel',orderSchema)
export default orderModel