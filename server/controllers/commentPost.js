import commentmodel from "../models/comment.js";
import { validationResult } from "express-validator";
export const  createcomment = async(req,res)=>{
const comment = req.body
comment.IP = req.ip
comment.approved = '0'
const newcomment = new commentmodel(comment)
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
try {
    await newcomment.save()
    res.status(201).json(newcomment)
}
catch(err){
    res.status(409).json({message : err.message})
}
}