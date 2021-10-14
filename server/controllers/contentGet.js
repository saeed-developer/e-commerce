import contentModel from './../models/content.js'
export const getContent = async(req,res)=>{
const {key} = req.query
console.log(key)
try{
    if(key === ''){
     const response = await contentModel.find()
     res.status(200).json(response)


}
    else if (key !== ''){
        await contentModel.find(query)
    }
    
}

catch(err){
        res.status(404).json({message : err.message})
    }

}