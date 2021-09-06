import React from 'react'
import { useState,useEffect } from 'react';
import {FaCheckSquare} from 'react-icons/fa'
import {AiFillCloseSquare} from 'react-icons/ai'
import axios from 'axios';
import { IconContext } from "react-icons"
const PostComment= React.forwardRef(({productId,data}, ref ) => 
    {
      const [cdata,setCdata] = useState(null)
      useEffect(()=>{
        setCdata(data)
        setComment({res:false})
      },[data])
     const [state, setState] = useState(()=>{return{text:'',name:'',email:''}})
     const [comment , setComment] = useState({res :false,content:''})
     function handleChange(e){
        setState({...state,[e.target.name]:e.target.value})
     }
     function handleSubmit(e){
       let type;
       let parentId;
       if (cdata == null){
         type = 'review'
         parentId = null
       }
       else {
         type = 'comment'
         if(cdata.parent_id != null)
        { 
          parentId = cdata.parent_id  
        }
        else {
          parentId = cdata._id
        }
      }
      
      axios.post(`${process.env.REACT_APP_URL}/comment`,{
        name:state.name,
        email:state.email,
        ip:'',
        content:state.text,
        product_id:productId,
        type : type,
        parent_id:parentId
      })
      .then(res=>{
        if (Number(res.status) === 201){
          setState({text:'',name:'',email:''})
          setComment({res : true,content:' نظر شما با موفقیت ثبت شد و پس از تایید نمایش داده میشود'})
          setCdata(null)
        }
      },err=>{
       console.error(err)//این ارور کاستومی که ساخته ام را نشان نمیدهد 
      })
      e.preventDefault()
    
     }
     const style = {direction:'rtl' , fontSize :'1.2vmax' , textAlign:'center' , marginTop:'2%'}
     //درآینده نیاز به یک ولیدیت سمت فرانت هم دارم 
    return (
    <>
    
     {cdata && <p style = {style}> {
       <IconContext.Provider value = {{className : 'close-icon'}}>
            <AiFillCloseSquare onClick = {()=>{
        setCdata(null)
          }}/>
       </IconContext.Provider>
     }درحال پاسخ به  {cdata.name}</p>}
     {comment.res ?<p style = {style} ><FaCheckSquare/> {comment.content}</p>:
     <p style = {style}>{comment.content}</p>
     }
     <form method = 'post' className = 'product-page-post-comment' onSubmit = {(e)=>{handleSubmit(e)}}>
      <textarea  value={state.text} onChange = {(e)=>handleChange(e)} ref={ref} name = 'text' placeholder = 'نظر خودتون رو راجع به محصول بنویسید' >
      </textarea>
      <label>نام
      <input onChange = {(e)=>handleChange(e)} type = 'text' name = 'name' value = {state.name}/> </label>
      <label >ایمیل 
      <input onChange = {(e)=>handleChange(e)} type = 'email' name = 'email' value = {state.email}/></label>
      <input className = 'product-page-post-comment-send' type="submit" value="ارسال" />
    </form>
    </>
    )});
export default PostComment
