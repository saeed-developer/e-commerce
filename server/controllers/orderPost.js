import orderModel from "../models/order.js";
import {app} from './../app.js'
export const postOrder = async(req,res)=>{
    let orderNubmer;
    let firstRequest = app.get('firstReq')
    if (firstRequest  === true) {
        app.set('firstReq',false)
        const Number = await orderModel.find().sort({_id : 1}).limit(1).select('orderNumber')
        if (Number.length  < 1) orderNubmer = 500
        else orderNubmer = Number
    }
    const body = req.body
    try{
     //if ordersaved to db increment orderNumber by 1
    }
    catch(err){
        res.status(404).json({message : err.message})
    }
}