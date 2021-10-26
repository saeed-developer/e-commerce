import userModel from "../models/users.js";
import bcrypt from 'bcrypt'
import {promisify} from 'util'
import jsonwebtoken from  'jsonwebtoken'
const jwtSign = promisify(jsonwebtoken.sign)
export const login = async(req,res)=>{
   const {email , password} = req.body
try{
const user = await userModel.find({email : email})
if(user.length == 0) res.status(404).json({message : 'کاربری با این ایمیل یافت نشد'})
else {
    const pass = user[0].password
   const authenticated =  await bcrypt.compare(password,pass)
   if (authenticated) {
    const user = {}
    const token = await jwtSign({username : email},process.env.tokenKey,{
        expiresIn : "24h"
    })
    user.token = token
    res.status(200).json(user)

}
   else res.status(401).json({message : 'گذرواژه شما اشتباه است'})
}
}
catch(err){
    res.json({message : err.message})
}
}
