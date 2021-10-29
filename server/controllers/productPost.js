import productModel from "../models/products.js"
export const createProduct = async(req,res)=>{
    const product = req.body 
    const apiKey =   req.get('authorization')
    try {
        if(apiKey === process.env.apiKey){
        const createProduct =  await productModel.insertMany(product)
         res.status(201).json(createProduct)
        }
        else if (apiKey !== process.env.apikey){
            res.status(401).json({message : 'you have not premission to post data'})
        }
    }
    catch(err){
        res.status(409).json({message : err.message})
    }
}

