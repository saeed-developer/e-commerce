import userModel from "../models/users.js";
import User from "../models/users.js";
import { validationResult } from "express-validator"
import bcrypt from 'bcrypt'
const signUp = async(req,res)=>{
   const {email} = req.body
   const {password} = req.body
   const saltRound = 12
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); 
    }
   
    try{  
      const userExist = await User.findOne({email : email})
      if(userExist == null){
      const hash = await bcrypt.hash(password,saltRound) 
      console.log(hash)
      const newUser = new userModel({email : email,password:hash}) 
      await newUser.save()
      res.status(201).json({message : 'شما با موفقیت ثبت نام کردید برای ورود به حساب کاربری از قسمت ورود اقدام نمایید'})
    }
    else res.status(409).json({message : 'کاربری با این ایمیل هم اکنون وجود دارد!'})
    }
    catch(err){
    res.json({message : err.message})
    }
}
export default signUp