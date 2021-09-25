import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../../stories/button'
import { useGetcitiesQuery } from '../../../services/shadnakapi'
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
    const [hint , setHint] = useState(null)
    
    const {data,isSuccess,isError,refetch} = useGetcitiesQuery({key : 'all'})
    isError && setInterval(()=>{
     refetch()
    },1000)
    

   
    const handleChnage = (e)=>{
     setForm({...form,[e.target.name]:e.target.value})
    }
const cityHint = ()=>{
    {/* این فانکشن قرار است هینت شهر را با توجه به استان انتخابی و حروف وارد شده به کاربرد بدهد*/ }
 if(isSuccess === true && form.province.length > 0 && form.city.length > 0){
     for (let x of data){
         if(x.province === form.province){
           for (let y of x.cities){
             if(y.startsWith(form.city)) setHint(y)
           }
         }
     }
 }
    }

    useEffect(()=>{
    cityHint()
    },[form.city])
    const handleSubmit = (e)=>{
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
               name = 'province'
               onChange = {(e)=> handleChnage(e)}
               >
             {isSuccess && data.map(item =>{
                 return <option key = {item._id} > {item.province} </option>
             })} 
             </select>
             <label>شهر</label>
             {/*<label htmlFor = 'input'>{hint}</label> باید استایل دهی شود تا در اینپوت به صورت کمرنگ نمایش داده شود*/}
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
