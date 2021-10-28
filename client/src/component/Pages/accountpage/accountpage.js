import './style.css'
import Header from './../firstpage/header.js'
import { useState } from 'react'
import {AiFillCloseSquare} from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios'
import { IconContext } from "react-icons"
import Button from './../../../stories/button.js'
const AccountPage = ()=>{
   
    const [click , setClick] = useState({show : false , signup : false , login  : false })
    const [form , setForm ] = useState({
        email : '',
        password : '',
    })
    const [dataLogedIn , setDataLogedIn] = useState({isData : false , data :false})
    const change = (e)=>{
        setForm({...form, [e.target.name] : e.target.value})
    }
    useEffect(()=>{
      const token  = localStorage.getItem('token')  
   if (token !== null ){
       
        axios.post(process.env.REACT_APP_URL + '/logged-in',{ token : token}).then(res => {
            setDataLogedIn({isData : true , data : res.data.message})
          
        } , err => {
            setDataLogedIn({isData : false,data: false})
            localStorage.clear() 
        })
    }
    },[dataLogedIn.isData])
    const loggedIn = (
        <div className = 'account-page-logged-in' >
            <p> 
              {dataLogedIn.data} عزیز خوش اومدی
            </p>
            <Button value = 'خروج از حساب کاربری' width = '20%' onClick ={()=>{
                localStorage.clear()
                setDataLogedIn({isData : false , data: false})
            }} />
        </div>
    )

    const submit = (e,param)=>{
    if(param ==='signup') {axios.post(process.env.REACT_APP_URL + '/post-signup',form).then( res => {
        if(res.status === 201){ alert(res.data.message)
        setForm({
            email : '',
            password : '',
        })
        }
      
    },err =>{
        if(err.response.status === 409) alert(err.response.data.message)
        else if(err.response.status === 400) alert(err.response.data.errors[0].msg)
    
    })
}
else if (param === 'login'){axios.post(process.env.REACT_APP_URL + '/post-login',form).then( res => {
    
    if(res.status === 200){
        localStorage.setItem('token' , res.data.token)
        setDataLogedIn({isData : true,data:false})
        alert('شما وارد شدید')
    setForm({
    email : '',
    password : '',})
}
} 
,err =>alert(err) )
}
     e.preventDefault()
    }
const login = (
    <div className = 'account-page-login'>
      ورود
      <IconContext.Provider value = {{style  : {cursor : 'pointer' , color : 'red'}}}>
      <AiFillCloseSquare onClick = { () =>{
         setClick({...click , show : false , login : false })

     }}/>
     </IconContext.Provider>
     <form className = 'account-page-signup-form'>
       <label>ایمیل</label>
       <input
       type = 'email'
       name = 'email'
       value = {form.email}
       onChange = {(e) =>{
           change(e)
       }}
       />
       <label>گذرواژه</label>
       <input
           type = 'password'
           name = 'password'
           value = {form.password}
           onChange = {(e) =>{
           change(e)
       }}
       />
       <br/>
       <Button onClick ={(e)=>{
           submit(e,'login')
       }} width = '25%' value = 'ورود'></Button>
     </form>
    </div>
)

const signup = (
    <div className = 'account-page-signup'>
     ثبت نام
     <IconContext.Provider value = {{style  : {cursor : 'pointer' , color : 'red'}}}>
     <AiFillCloseSquare onClick = { () =>{
         setClick({...click , show : false , signup : false })
     }}/>
     </IconContext.Provider>
     <form className = 'account-page-signup-form'>
       <label>ایمیل</label>
       <input
       type = 'email'
       name = 'email'
       value = {form.email}
       onChange = {(e) =>{
           change(e)
       }}
       />
       <label>گذرواژه</label>
       <input
           type = 'password'
           name = 'password'
           value = {form.password}
           onChange = {(e) =>{
           change(e)
       }}
       />
       <br/>
       <Button onClick ={(e)=>{
           submit(e,'signup')
       }} width = '25%' value = 'ثبت نام'></Button>
     </form>
    </div>
)
const showDiv  = (e)=>{
if(e === 'signup'){
    setClick({...click,show : true , signup : true})
}
else if (e === 'login'){
    setClick({...click,show : true ,login : true})
}
}

const loggedOut = (
   <div>
     <div className = 'account-page-container' >
         <div onClick = {()=>{
           showDiv('signup')
         }}>عضویت </div>
         <div onClick = {(e)=>{
             showDiv('login')
            }}>ورود</div>
         </div>
         <div>
         {click.show ? click.login? login : signup : null}
         </div>
    </div>  
         )
       
    return (
        <>
        <Header/>
        {dataLogedIn.isData ? loggedIn:     
         loggedOut
         }
    

        </>
    )
}
export default AccountPage