import React from 'react'
import Header from '../firstpage/header'
import { useGetproductQuery } from '../../../services/shadnakapi'
import Product from './product.js'
import { increment, addNewItem } from '../../../features/cart/cartSlice'

import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
const ShopPage = ()=>{
 const dispatch = useDispatch()

function click(item){
  let price;
  if (item.price.onSlae !=null){
    price = item.price.onSale
  }
  else  {
    price = item.price.original
  }
  
   dispatch(addNewItem(item))
   dispatch(increment( price ))
}

 
  
console.log(useSelector(state => state.counter.item))



  const {isSuccess,data ,isError}  = useGetproductQuery('all')
  const imgUrl = process.env.REACT_APP_URL + '/product-image?id='
 
    return (
     
        < >
         
      <Header logosize = {'20%'} breakwidth = {'55%'} />
      {isSuccess &&  <div className = 'product-container'>  { data.map((item) =>{
      return   <Product key = {item._id} img = {imgUrl + item._id + '.png'} info = {item} onClick = {()=>{
        click(item)
      }}/>
      })  }</div> }{isError &&  window.location.reload()  }  
</>   )
}

export default ShopPage