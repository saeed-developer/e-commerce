import citiesModel from "../models/provinceCities.js";
export const postCities = async(req,res)=>{
 const body = req.body
    try{
    const saveData = await citiesModel.insertMany(body)
    res.json(saveData)
    }
    catch(err){
     res.json({message : err.message})
    }
}