import orderModel from "../models/order.js";
export const postOrder = async(req,res)=>{
    const body = req.body
    try{
     
    }
    catch(err){
        res.status(404).json({message : err.message})
    }
}