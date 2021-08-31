import React from 'react'
import { useGetproductQuery } from '../../../services/shadnakapi'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../stories/button';
import HandleCart from './handleCart';
const ProductSection = ({id}) => {
    const  {data,isSuccess,isError,refetch} = useGetproductQuery(id)
    const imgUrl = process.env.REACT_APP_URL + '/product-image?id=' + id + '.png'
    const amount = useSelector(state => state.counter.amount[id])
    isError && 
    setInterval(() => {
        refetch() 
    }, 1000);
   
    const [click , setClick] = useState(false)
    const [clickR , setClickR] = useState(false)
    useEffect(() => {
     setClick(false)
    }, [click])
    useEffect(() => {
       setClickR(false)
      }, [clickR])
    return (
        <>
         { isSuccess && <HandleCart  onClick = {click}  onClickR = {clickR} item = {data[0]}/>}
         {  isSuccess && <div className = 'product-page-main-container' >
          <img className = 'product-page-main-img'  src = {imgUrl} alt = {data[0].name} />
          <div className =  'product-page-main-p'>
          <p>{data[0].name}</p> <br/>
          <p> درباره محصول</p>
          <p> {data[0].explination} </p>
          <p>قیمت:</p>
           { 
              data[0].price.onSale ?<div > <p style = {{textDecoration :'line-through'}}>{data[0].price.original} تومان</p> 
           <p> {data[0].price.onSale} تومان</p>  </div>:
            <div><p> {data[0].price.original} تومان</p></div>}  
             <div>
         <Button value = 'افزودن به سبد خرید'  fontSize = '1.5vmax' width = '49%' onClick = {()=>{
             setClick(true)
          }}/>
            
          {amount?
              <Button margin = '0 1% 0 0' value = 'حذف از سبد خرید'  fontSize = '1.5vmax' width = '49%' onClick = {()=>{
             setClickR(true)
          }}/>:null
          }
          </div>
          <p> تعداد :{amount}</p> 
          </div>
     </div>   
     }     
            
        </>
    )
}

export default ProductSection
