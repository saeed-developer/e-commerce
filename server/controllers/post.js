import commentmodel from "../models/comment.js";
export const findcomments = async (req,res)=>{
    try {
     const id = await req.query.id  
        await commentmodel.find({_id : id},(err,doc)=>{
            if(err){//this code is ok but return wrong if one id be wrong
                res.status(500).json(err)
            }
             res.status(200).json(doc)     
        })
    }
    catch(err){
     res.status(404).json({message : err.message})
    }
}
export const comments = async(req,res)=>{
    try{
        const comments = await commentmodel.find()
        res.status(200).json(comments)
    }
    catch(err){
        console.log(err)
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