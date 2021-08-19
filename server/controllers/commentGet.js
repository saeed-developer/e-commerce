import commentmodel from "../models/comment.js"
export const findcomments = async (req,res)=>{
    try {
        const {id} = await req.query
        const comment = await commentmodel.find({_id : id}).select('date id name content approved type parent_id')
        res.status(200).json(comment)
    }
    catch(err){
     res.status(404).json({message : err.message})
    }}