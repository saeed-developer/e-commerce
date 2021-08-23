import urlModel from "./../models/url.js"
import productModel from "../models/products.js"
export const getUrl = async(req,res)=>{
   const {key} = req.query
   try{
        if(key === 'main'){
        const response = await urlModel.find().select("main")
        res.status(200).json(response)}
        else if (key === 'product'){
            const response = await urlModel.find().select("product")
            res.status(200).json(response) 
        }
        else if (key === 'product/name'){
            const response = await urlModel.aggregate(
                [
                 { $lookup:{
                    from : 'productmodels',
                    localField:'productId',
                    foreignField:'_id',
                    as:'urlname'

                    }},
                  
                
                ]    
 )
              res.status(200).json(response)
        }
      
        else {
            const response = await urlModel.find()
            res.status(200).json(response) 
        }       
   }
   catch(err){
       res.status(404).json({message:err.message})
   }
}