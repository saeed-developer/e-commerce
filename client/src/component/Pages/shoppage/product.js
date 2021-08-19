import React from 'react'
import { useSelector } from 'react-redux'
import { useGeturlQuery } from './../../../services/shadnakapi.js'
import { Link } from 'react-router-dom'



const Product = ({img,info,onClick,removeButton,onClickR}) => {
   const {data , isSuccess,isError,refetch} = useGeturlQuery('product')
   
   let items = useSelector(state=> state.counter.item)
   let amount = 0
   for(let x of items){
    if(x._id === info._id){
        amount++
    }
   } 
   let path;
   isError && refetch() 
  if(isSuccess){ for(let x of data[0].product){
     if(x.id ===info._id){
         path = x.path
     }
  }}
  
   
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
            
            <p> تعداد:{amount}</p>{/*  با کلس بی تی ان در رندر اولیه با بی تی ان دیگر فایل های سی اس اس مشکل پیدا میکرد*/}
            {removeButton && <button className = 'shop-btn' onClick ={onClickR} >  حذف از سبد خرید</button> }
          
        </div>     
        </>
       
    )
}

export default Product
