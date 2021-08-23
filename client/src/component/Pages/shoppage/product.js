import React from 'react'
import { useSelector } from 'react-redux'
import { useGeturlQuery } from './../../../services/shadnakapi.js'
import { Link } from 'react-router-dom'



const Product = ({img,info,onClick,removeButton,onClickR}) => {
   
   const {data , isSuccess,isError,refetch} = useGeturlQuery()
   
   let items = useSelector(state=> state.counter.item)
   let amount = 0
   for(let x of items){
    if(x._id === info._id){
        amount++
       
    }
   } 
   let path;
   isError && refetch() 
  if(isSuccess){ for(let x of data){
     if(x.productId ===info._id){
         path = x.path
     }
  }}
  let show;
   if(removeButton > 0 ){
    show = true
   }
   else if (removeButton === 0){
       show = false
   }
    return (
        <>
        <div  className = 'item-container'  >
            <img src = {img} className ='product-img' alt = {info.name}  />
            <p>{info.category}</p>
            <p>{info.name}</p>
           {isSuccess && <Link to = {path} className = 'shop-link'> مشاهد محصول</Link>}
            {info.price.onSale ?<div> <p style = {{textDecoration :'line-through'}}>{info.price.original} تومان</p> <p> {info.price.onSale} تومان</p>  </div>:
            <div><p> {info.price.original} تومان</p></div>}   
            <button  className = 'shop-btn' onClick= {onClick} > افزودن به سبد خرید</button>
            
            <p> تعداد:{amount}</p>
            {show && <button className = 'shop-btn' onClick ={onClickR} >  حذف از سبد خرید</button> }
          
        </div>     
        </>
       
    )
}

export default Product
