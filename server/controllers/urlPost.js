import urlModel from './../models/url.js'
export const createUrl = async(req,res)=>{
    const url = req.body
    const {key} = req.query
    const apiKey =   req.get('authorization')
try{
    if(apiKey === process.env.apiKey){
    if(key === 'insert'){
    const urlRes =  await urlModel.insertMany(url)
    res.status(201).json(urlRes)
}
    else if (query ==='update'){
        const urlRes =  await urlModel.updateOne({_id :  id}, {product : url})
        res.status(201).json(urlRes)
    }
}
else if (apiKey !== process.env.apikey){
    res.status(401).json({message : 'you have not premission to post data'})
}
 }
    catch(err){
     res.status(409).json({message:err.message})
    }
}