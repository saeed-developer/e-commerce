import userModel from "../models/users.js";
import User from "../models/users.js";
import { validationResult } from "express-validator"
const signUp = async(req,res)=>{
   const {email} = req.body
   const {password} = req.body
  //next 
  //I should hash the password 
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); 
    }
   const newUser = new userModel(req.body)
    try{
      const userExist = await User.findOne({email : email})
      if(userExist == null){
      await newUser.save()
      res.json({message : 'شما با موفقیت ثبت نام کردید برای ورود به حساب کاربری از قسمت ورود اقدام نمایید'})
    }
    else res.status(409).json({message : 'کاربری با این ایمیل هم اکنون وجود دارد!'})
    }
    catch(err){
    res.json({message : err.message})
    }
}
export default signUp