import React from 'react'
import { useGetproductQuery } from '../../../services/shadnakapi'
import './styles.css';
import Header from './../firstpage/header.js'
import Button from '../../../stories/button';
const ProductPage = ({id}) => {
   const  {data,isSuccess,isError,refetch} = useGetproductQuery(id)
   const imgUrl = process.env.REACT_APP_URL + '/product-image?id=' + id + '.png'
   isError && refetch()
  console.log(data)
    return (
        <>
        <Header logosize = {'20%'} breakwidth = {'55%'} />
     {  isSuccess && <div className = 'product-page-main-container' >
          <img className = 'product-page-main-img'  src = {imgUrl} alt = {data[0].name} />
          <div className =  'product-page-main-p'>
          <p >{data[0].name}</p> <br/>
          <p> درباره محصول</p>
          <p> {data[0].explination} </p>
          <p>قیمت:</p>
           { 
              data[0].price.onSale ?<div > <p style = {{textDecoration :'line-through'}}>{data[0].price.original} تومان</p> 
           <p> {data[0].price.onSale} تومان</p>  </div>:
            <div><p> {data[0].price.original} تومان</p></div>}  
          <Button value = 'افزودن به سبد خرید'  fontSize = '1.5vmax' width = '60%'/>
          </div>
     </div>  } 
          
       </>
    )
}

export default ProductPage
