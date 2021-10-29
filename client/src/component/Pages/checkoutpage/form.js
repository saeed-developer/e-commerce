import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../../../stories/button'
import { useGetcitiesQuery } from '../../../services/shadnakapi'
import { useSelector } from 'react-redux'
import { discount } from '../../../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
const Form = () => {
    const dispatch = useDispatch()
    const [form , setForm] = useState(()=> {return {
        name : '',
        province: 'تهران',
        city:'',
        address:'',
        postalCode:'',
        phone: '',
        email:'',
        explination:'',
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
 if(isSuccess === true && form.province.length > 0 && form.city.length > 0){
     for (let x of data){
         if(x.province === form.province){
           for (let y of x.cities){
             if(y.startsWith(form.city)) setHint(y)
           }
         }
     }
 }
 else setHint('')
    }
     const product =  useSelector(state => state.counter.amount)
     const total = useSelector(state => state.counter.total)
     const disCount = useSelector(state => state.counter.discount)
    useEffect(()=>{
    cityHint()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[form.city])
    const handleSubmit = (e)=>{
     const url = `${process.env.REACT_APP_URL}/post-order`
     const order = {...form}
     const cart = []
     for(let x in product){
       if(product[x] > 0){
         cart.push({[x] : product[x]})
       }
     }
    
     order.product = cart
     order.total  = total
     if(Object.keys(disCount).length === 0) order.discount = {isCode : false}
     else order.discount ={isCode : true , ...disCount}
     axios.post(url,order)
     .then(res =>{if(res.status === 200){
      return alert(`سفارش شما با موفقیت ثبت شد
      شماره سفارش شما 
     ${res.data.orderNumber}`)
    }} 
     ,err => alert(` errorcode  ${err.response.status}
     errormessage: ${err.response.data.message}
     `))
     setForm(  {  name : '',
     province: 'تهران',
     city:'',
     address:'',
     postalCode:'',
     phone: '',
     email:'',
     explination:''})
     dispatch(discount({}))
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
               style = {{fontSize : '1.2vmax'}}
               >
             {isSuccess && data.map(item =>{ 
                 return <option style = {{fontSize : '1.2vmax'}} key = {item._id} > {item.province} </option>
             })} 
             </select>
             <label>شهر</label>
             <label className = 'checkout-page-form-city-hint' htmlFor = 'input'>{hint}</label> 
                   <input
                   onBlur = {()=>{setHint('')}}
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
                     <label> کد پستی</label>
                   <input 
                   type = 'text'
                   value= {form.postalCode}
                   name = 'postalCode'
                   onChange = {(e)=> handleChnage(e)}
                   />
                     <label>تلفن همراه</label>
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
