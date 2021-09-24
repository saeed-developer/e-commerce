import urlModel from '../models/url.js'
import productModel from "../models/products.js";
 export const  urlCreator = async()=>{
    try{
    const productUrl = await urlModel.find({pathName : 'ProductPage'}) 
    if (productUrl.length === 0){
        const product = await productModel.find().select('_id name') 
        const path= await urlModel.find({pathName : 'ShopPage'}).select('path')
        const urlList =  nameToUrl(product,path[0].path)
        await urlModel.insertMany(urlList)
        console.log('product\'s paths Created')
    }
    // I Should create condition for find new product if there was any and then create path for it
    else  {
       
        return  
    } 
}  
catch(err){
    console.log({message : err.message})
}
}
function nameToUrl(items,basePath){
    let paths = []
    for(let x of items){
        const name = x.name.replace(  /[' ' , (]/g,'-').slice(0,-1)          
        const path = basePath + '/' + name
        const pathName = 'ProductPage'
        paths.push({
            productId : x._id,
            path:path,
            pathName : pathName 
        })
    }
   return paths
}