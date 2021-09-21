import urlModel from './../models/url.js'
export const createUrl = async(req,res)=>{
    const url = req.body
    const {key} = req.query
try{
    
    if(key === 'insert'){
    const urlRes =  await urlModel.insertMany(url)
    res.status(201).json(urlRes)
}
    else if (query ==='update'){
        const urlRes =  await urlModel.updateOne({_id :  id}, {product : url})
        res.status(201).json(urlRes)
    }
 }
    catch(err){
     res.status(409).json({message:err.message})
    }
}