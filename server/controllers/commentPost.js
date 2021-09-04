import commentmodel from "../models/comment.js";
export const  createcomment = async(req,res)=>{
const comment = req.body
comment.IP = req.ip
comment.approved = '0'
const newcomment = new commentmodel(comment)
console.log(comment)
try {
    await newcomment.save()
    res.status(201).json(newcomment)
}
catch(err){
    res.status(409).json({message : err.message})
}
}