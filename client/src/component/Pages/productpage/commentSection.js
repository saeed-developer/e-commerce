import { useGetcommentsQuery } from '../../../services/shadnakapi';
import React from 'react';
import PostComment from './postComment.js';
import {BiReply} from 'react-icons/bi'
    const CommentSection = ({id}) => {
    const comment = useGetcommentsQuery({key : 'productId/comment', id : id})   
    const {data , isSuccess,isError,refetch} = useGetcommentsQuery({key : 'productId/review' , id : id})   
    isError &&
    setInterval(() => {
        refetch()
    }, 1000);
    const commentsNumber = useGetcommentsQuery({key : 'count' , id : id})
    commentsNumber.isError && 
    setInterval(()=>{ 
     commentsNumber.refetch()
      
    },1000)
  
    function click(){
        ref.current.focus()
    }
    const ref = React.createRef()
    return (
        <>
         <div className = 'product-page-comment-section-container'>
            {commentsNumber.isSuccess && <p > نظرات ({commentsNumber.data}) </p>}
            <hr style = {{border : '1px solid black' , width : '100%'}} />
            
            {isSuccess && comment.isSuccess && data.map((data)=>{
                let value;
                let index;
                let commentdata =[]
                const id = data._id
              for (let x of comment.data){
                  if (x.parent_id === id ){
                  commentdata.push(x)
                  }
              }
                if (data.date.includes('T') ){
                    index = data.date.indexOf('T')
                } 
                
              if(commentdata.length ===0) {value = ( 
                  
                  <div key = {data._id} className = "product-page-comment-container">
                      <p>{data.name}</p>
                       
                      <p >{data.date.slice(0,index)}</p>
                      <div style = {{width:'100%'}}></div>
                     <p>{
                     data.content
                     }</p> 
                     <p className = 'product-page-comment-answer' onClick ={click}> <BiReply/>پاسخ</p>
                  </div>
              )}
              else if (commentdata.length> 0){
                  value = (
                 <div key = {data._id}  style = {{display:'flex' , flexDirection:'column' }}>
                <div   className = "product-page-comment-container">
                      <p  >{data.name}</p>
                       
                      <p >{data.date.slice(0,index)}</p>
                      <div style = {{width:'100%'}}></div>
                     <p >{
                     data.content
                     }</p> 
                     <p className = 'product-page-comment-answer' onClick ={click}><BiReply/>پاسخ</p> 
                  </div>
                  {
                      commentdata.map((data)=>{
                     return (  <div key = {data._id} className = "product-page-comment-container" style ={{marginTop:'0px' , alignSelf:'flex-end',
                     marginLeft:'2%'}}>
                      <p  >{data.name}</p>
                       
                      <p >{data.date.slice(0,index)}</p>
                      <div style = {{width:'100%'}}></div>
                     <p >{
                     data.content
                     }</p> 
                     <p className = 'product-page-comment-answer' onClick ={click}> <BiReply/>پاسخ</p> 
                  </div>) 
                      })
                  }
                
                </div> 
                 
              )}
              return value
            }) 
            }
        </div>
        <PostComment  ref = {ref}   />
        </>
    )
}

export default CommentSection
