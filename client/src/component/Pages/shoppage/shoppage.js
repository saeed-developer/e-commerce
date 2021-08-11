import React from 'react'
import Header from '../firstpage/header'
import { useGetproductQuery } from '../../../services/shadnakapi'
import Product from './product.js'
import './styles.css'
const ShopPage = ()=>{
  const {isSuccess,data ,isError}  = useGetproductQuery('all')
  const imgUrl = process.env.REACT_APP_URL + '/product-image?id='
    return (
        < >
      <Header logosize = {'20%'} breakwidth = {'55%'} />
      {isSuccess &&  <div className = 'product-container'>  { data.map((item) =>{
      return   <Product key = {item._id} img = {imgUrl + item._id + '.png'} info = {item} />
      })  }</div> }{isError && <div> به نظر میاد مشکلی پیش آمده چنده لحظه دیگر دوباره امتحان کنید</div>}  
</>   )
}

export default ShopPage