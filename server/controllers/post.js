import commentmodel from "../models/comment.js";
export const comments = async (req,res)=>{
    try {
     const comment = await commentmodel.find()
     res.status(200).json(comment)

    }
    catch(err){
     res.status(404).json({message : err.message})
    }
}

export const  createcomment = async(req,res)=>{
const comment = req.body
const newcomment = new commentmodel(comment)
try {
    await newcomment.save()
    res.status(201).json(newcomment)
}
catch(err){
    res.status(409).json({message : err.message})
}
}