import urlModel from './../models/url.js'
import productModel from "./../models/products.js";
 export const  urlCreator = async(req,res)=>{
    try{
    const productUrl = await urlModel.find()
   
    if (productUrl.length === 0){
        
        const product = await productModel.find().select('_id name') 
        const urlList =  nameToUrl(product)
        await urlModel.insertMany(urlList)
    }
    else  {
       
        return  
    } 
}  
catch(err){
    res.json({message : err.message})
}
}
function nameToUrl(items){
    let paths = []
    for(let x of items){
        const name = x.name.replace(  /[' ' , (]/g,'-').slice(0,-1)          
        const path = `/فروشگاه-شادناک/${name}`
        paths.push({
            productId : x._id,
            path:path})
    }
   return paths
}