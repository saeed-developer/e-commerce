import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../../stories/button'
const Form = () => {
    const [form , setForm] = useState(()=> {return {
        name : '',
        province: '',
        city:'',
        address:'',
        postal:'',
        phone: '',
        email:'',
        text:'',
    }})
    const handleChnage = (e)=>{
     setForm({...form,[e.target.name]:e.target.value})
    }
    const cityHint = ()=>{

    }
    useEffect(()=>{
     const url = process.env.REACT_APP_URl + '/provinces'  
     axios.post(url)
     .then(res => console.log(res),err => console.error(err))
    },[])
    useEffect(()=>{
     if (form.province !== ''){
         const url = process.env.REACT_APP_URl + '/cities'
         axios.post(url,null, {
             params:{
                 key : form.province
             }
         })
         .then(res => {
            console.log(res)},err => console.err(err))
     }
    },[form.province])
    const handleSubmit = (e)=>{
        console.log('tr')
     const url = process.env.REACT_APP_URl + '/form'
     axios.post(url,form)
     .then(res =>console.log( res), err => console.error(err))
     e.preventDefault()
    }
    return (
        <div>
            <form className = 'checkout-page-form' onSubmit = {(e) => handleSubmit(e)} autoComplete = 'on' >
               <label> نام و نام خانوادگی </label>
                   <input 
                   type = 'text'
                   value= {form.name}
                   name = 'name'
                   onChange = {(e)=> handleChnage(e)}
                   />
               
               <label>استان</label>
               <select
               value= {form.province}
               name = 'name'
               onChange = {(e)=> handleChnage(e)}
               >
              {/* لیست استان از بک اند ‌+ گرفتن لیست شهرهای استان و هینت کردن آن در شهر */}
             </select>
             <label>شهر </label>
                   <input 
                   type = 'text'
                   value= {form.city}
                   name = 'city'
                   onChange = {(e)=> handleChnage(e)}
                   />
             <label> آدرس دقیق</label>
                   <input 
                   type = 'text'
                   value= {form.address}
                   name = 'address'
                   onChange = {(e)=> handleChnage(e)}
                   />
                     <label> (بااعدادانگلیسی و بدون فاصله)کد پستی</label>
                   <input 
                   type = 'text'
                   value= {form.postal}
                   name = 'postal'
                   onChange = {(e)=> handleChnage(e)}
                   />
                     <label> (بااعدادانگلیسی و بدون فاصله)تلفن همراه</label>
                   <input 
                   type = 'text'
                   value= {form.phone}
                   name = 'phone'
                   onChange = {(e)=> handleChnage(e)}
                   />
                     <label> ایمیل(اختیاری) </label>
                   <input 
                   type = 'email'
                   value= {form.email}
                   name = 'email'
                   onChange = {(e)=> handleChnage(e)}
                   />
                     <label> توضیحات شما(اختیاری)</label>
                 <textarea
                 type = 'text'
                 value= {form.text}
                 name = 'text'
                 onChange = {(e)=> handleChnage(e)}
                 />
                <div className ='checkout-page-form-button'>
                    <Button  type = 'submit' value = 'ثبت سفارش' />
                </div>
                
            </form>
        </div>
    )
}

export default Form
