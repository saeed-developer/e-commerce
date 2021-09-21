import urlModel from "./../models/url.js"
import productModel from "../models/products.js"
export const getUrl = async(req,res)=>{
   const {key , pathName} = req.query
   try{
        if(key === 'product'){
        const response = await urlModel.find({productName : "product"})
        res.status(200).json(response)
    
    }
        else if (key === 'main'){
            const response = await urlModel.find({productName : "name"})
            res.status(200).json(response) 
        }
        /*else if (key === 'product/name'){
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
        }*/
      
        else if (key == undefined) {
            const response = await urlModel.find()
            res.status(200).json(response) 
        }  
        else if (key === 'pathName') {
         const response = await urlModel.find({pathName:pathName })
         res.status(200).json(response)
        }   
   }
   catch(err){
       res.status(404).json({message:err.message})
   }
}