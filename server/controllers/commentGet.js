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
        else if(key === 'productId/review'){
            const comment =  await commentmodel.find({product_id : id}).select('date id name content parent_id')
            .where({"approved" : "1","type":"review"}).sort({_id : -1})
            res.status(200).json(comment)
        }
        else if (key === 'productId/comment'){
            
            const comment =  await commentmodel.find({product_id : id}).select('date id name content parent_id')
            .where({"approved" : "1","type":"comment"}).sort({_id : 1})
            res.status(200).json(comment)
        }
    }
    catch(err){
     res.status(404).json({message : err.message})
    }}