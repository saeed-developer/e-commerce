import productModel from "../models/products.js"
export const createProduct = async(req,res)=>{
    const product = req.body 
    try {
        const createProduct =  await productModel.insertMany(product)
         res.status(201).json(createProduct)
        
        
    }
    catch(err){
        res.status(409).json({message : err.message})
    }
}

