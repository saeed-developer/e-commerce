import urlModel from './../models/url.js'
import productModel from "./../models/products.js";


 export const  urlCreator = async(req,res)=>{
    try{
    const productUrl = await urlModel.find().select("product")
    if (productUrl[0].product.length == 0){
        const product = await productModel.find().select('_id name') 
        const urlList =  nameToUrl(product)
        await urlModel.updateOne({_id:'611e573d81e5f63440ef41c8'},{product : urlList})
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
            id : x._id,
            path:path})
    }
   return paths
}