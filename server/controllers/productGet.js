import productModel from "../models/products.js"
import { createReadStream, promises} from "fs"


export const getProduct = async(req,res)=>{
const { id} = req.query
console.log(id)
try{
 if (id === 'all'){
          const product = await productModel.find().select('name price category')
           res.status(200).json(product)     
    }
     else{
        const product = await productModel.find({_id : id}).select('name price category explination')
        res.status(200).json(product)
    }    
}
catch(err){
  res.status(404).json({message : err.message})
    }

}
/*
export const getProduct = (req,res)=>{
const query = req.query.number
console.log(query)
productModel.find().select('name price').exec((err,doc)=>{
    if(err){
        res.status(500).send(err)
    }
    res.status(200).json(doc)
})}  this is another approach
 */
export const getProductImage = async(req,res)=>{
    try{
        const {name} = req.query
        const file = await promises.readdir ('./images/shop-page')
        if(name === 'all'){
            res.status(200).send(file)
        }
        else{
        const stream = await createReadStream(`./images/shop-page/${name}`)
        stream.pipe(res)}     
}
    catch(err){
        res.send(err)
    }
}