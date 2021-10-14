import contentModel from "../models/content.js";
export const postContent  = async(req,res)=>{
    
  const apiKey =   req.get('authorization')
  console.log(req.get('content-type'))
  const data = req.body
  
try{
    if(apiKey === process.env.apiKey){
        await contentModel.insertMany(data)
        res.status(200).json({message : 'data inserted to database successfully'})
    }
    else if (apiKey !== process.env.apikey){
        res.status(401).json({message : 'you have not premission to post data'})
    }

}

catch(err){
    res.json({message : err.message})
}
}