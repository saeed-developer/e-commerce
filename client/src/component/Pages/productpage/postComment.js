import React from 'react'
import { useState } from 'react';
import {FaCheckSquare} from 'react-icons/fa'
const PostComment= React.forwardRef((props, ref ) => 
    {
     const [state, setState] = useState({text:'',name:'',email:''})
     const [comment , setComment] = useState(null)
     function handleChange(e){
        setState({...state,[e.target.name]:e.target.value})
     }
     function handleSubmit(e){
      console.log(state)
      e.preventDefault()
      setState({text:'',name:'',email:''})
      setComment(`${state.name}  عزیز نظر شما با موفقیت ثبت شد و بزودی نمایش داده میشود`)
     }
    return (
    <>
     {comment && <p style = {{direction:'rtl' , fontSize :'1.2vmax' , textAlign:'center' , marginTop:'2%'}} ><FaCheckSquare/> {comment}</p>}
     <form method = 'post' className = 'product-page-post-comment' onSubmit = {(e)=>{handleSubmit(e)}}>
     <textarea  value={state.text} onChange = {(e)=>handleChange(e)} ref={ref} name = 'text' placeholder = 'نظر خودتون رو راجع به محصول بنویسید' >
     </textarea>
     <label>نام
     <input onChange = {(e)=>handleChange(e)} type = 'text' name = 'name' value = {state.name}/> </label>
     <label >ایمیل 
     <input onChange = {(e)=>handleChange(e)} type = 'email' name = 'email' value = {state.email}/></label>
     <input className = 'product-page-post-comment-send' type="submit" value="ارسال" />
    </form>
    </>)}
  );
export default PostComment
