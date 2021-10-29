import citiesModel from "../models/provinceCities.js";
export const postCities = async(req,res)=>{
 const body = req.body
 const apiKey =   req.get('authorization')
    try{
        if(apiKey === process.env.apiKey){
        const saveData = await citiesModel.insertMany(body)
        res.json(saveData)
}
        else if (apiKey !== process.env.apikey){
           res.status(401).json({message : 'you have not premission to post data'})
}
    }
    catch(err){
     res.json({message : err.message})
    }
}