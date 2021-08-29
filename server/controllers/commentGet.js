import commentmodel from "../models/comment.js"
export const findcomments = async (req,res)=>{
    try {
        const {id,key} =  req.query
       
        if (key === undefined){
        const comment = await commentmodel.find({_id : id}).select('date id name content type parent_id')
        res.status(200).json(comment)
    }
        else if (key === 'count'){
            const amount  = await commentmodel.countDocuments({
                "product_id":id,
                "approved":"1",
                "parent_id":null
            })
            res.status(200).json(amount)
        }
        else if(key === 'productId'){
            const comment =  await commentmodel.find({product_id : id}).select('date id name content type parent_id')
            .where({"approved" : "1"})
            res.status(200).json(comment)
        }
    }
    catch(err){
     res.status(404).json({message : err.message})
    }}