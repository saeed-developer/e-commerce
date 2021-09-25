import citiesModel from "../models/provinceCities.js";
export const getCities = async(req,res) =>{
    const {key , province} = req.query
    try{
    if (key === 'all'){
     const cities = await citiesModel.find().select('province cities')
     res.status(200).json(cities)
    }
    else if ( key === 'province'){
        const  province = await citiesModel.find().select('province')
        res.status(200).json(province)
    }
    else if ( key === 'cities' && province !==undefined){
          const cities = await citiesModel.find({province : province}).select('cities')
          res.status(200).json(cities)
    }
}
    catch(err){
        res.json({message : err.message})
    }
}