import discountCodeModel from './../models/discountCode.js'
import { validationResult } from "express-validator";
import moment from 'jalali-moment'
export const discountCode = async(req,res)=>{
      const dateNow  = new Date()
      const year = dateNow.getFullYear()
      let month = dateNow.getMonth() + 1
      let day = dateNow.getDate()
      if (String(month).length === 1) month = '0' + month 
      if (String(day).length === 1) day = '0' + day
      const today = year + '/' + month + '/' + day   
      const jalaliDate = moment(today, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); 
    }
    try{
        const {key} = req.query
        const code = await discountCodeModel.find({'discountCode':key }).select('amount date')
        if(code.length> 0){
        const {date} = code[0]
        const {amount} = code[0] 
        if (date >= jalaliDate) res.status(200).json({مبلغ:amount})
        else res.status(404).json({message : 'مهلت استفاده از کد شما اتمام یافته است'})
      }
        else  res.status(404).json({message:'کد تخفیف یافت نشد'})
    }
    catch(err){
        res.status(404).json({message : err.message})
    }
}