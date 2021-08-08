import productModel from "../models/products.js"
export const createProduct = async(req,res)=>{
    const product = req.body 
    console.log(product)
    try {
        await productModel.insertMany(product , (err,doc)=>{
         if (doc){
             res.status(201).json(doc)
         }
        })
        
    }
    catch(err){
        res.status(409).json({message : err.message})
    }
}

