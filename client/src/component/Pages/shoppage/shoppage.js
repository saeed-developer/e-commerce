import React from 'react'
import Header from '../firstpage/header'
import { useGetproductQuery } from '../../../services/shadnakapi'
import Product from './product.js'
import './styles.css'
const ShopPage = ()=>{
  const {isSuccess,data}  = useGetproductQuery('all')
  const imgUrl = 'http://localhost:3000/product-image?id='
    return (
        < >
      <Header logosize = {'20%'} breakwidth = {'55%'} />
      {isSuccess &&  <div className = 'product-container'>  { data.map((item) =>{
      return   <Product key = {item._id} img = {imgUrl + item._id + '.png'} info = {item} />
      })  }</div>}
      
</>   )
}

export default ShopPage