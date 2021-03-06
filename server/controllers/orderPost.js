import orderModel from "../models/order.js";
import {app} from './../app.js'
import { newOrder } from "../subscribers/sms.js";
export const postOrder = async(req,res)=>{
    let body = req.body
    let orderNubmer;
    let firstRequest = app.get('firstReq')
    if (firstRequest  === true) {
        app.set('firstReq',false)
        let Number = await orderModel.find().sort({_id : -1}).limit(1).select('orderNumber')
        if (Number.length  < 1) {
             orderNubmer = 500
             body.orderNumber = orderNubmer
             app.set('orderNumber' , orderNubmer)
            }
            else {
                orderNubmer = Number[0].orderNumber
                orderNubmer++
                body.orderNumber = orderNubmer
                app.set('orderNumber' , orderNubmer)
            }
    }
    else {
        const num = app.get('orderNumber')
        orderNubmer = num
        body.orderNumber = num
    }
    body.paid = {isPaid : false}
    const orderForm = new orderModel(body)
   
    try{
     await orderForm.save()
     res.status(200).json({orderNumber : orderNubmer})
     newOrder.emit('newOrder',orderForm)
     orderNubmer++
     app.set('orderNumber',orderNubmer)
     
    }
    catch(err){
        res.status(403).json({message : err.message})
    }
}