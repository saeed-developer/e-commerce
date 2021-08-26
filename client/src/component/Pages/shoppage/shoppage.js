/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import HandleCart from '../productpage/handleCart';
import Header from '../firstpage/header'
import { useGetproductQuery } from '../../../services/shadnakapi';
import Product from './product.js';
import { useSelector} from 'react-redux';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const ShopPage = ()=>{
  const [click , setClick] = useState(false)
  const [clickR , setClickR] = useState(false)
  const [item , setItem] = useState(null)
  const reduxAmount = useSelector(state => state.counter.amount)
  const {isSuccess,data ,isError,refetch}  = useGetproductQuery('all')
  const imgUrl = process.env.REACT_APP_URL + '/product-image?id='
       let total = useSelector(state =>state.counter.total) 
       let showFooter
       if (total=== 0){
         showFooter = false
       }
       else if (total>0){
         showFooter = true
       }
 useEffect(() => {
   setClick(false)
  }, [click])
  useEffect(() => {
     setClickR(false)
    }, [clickR])
    return (
        < >
      <Header logosize = {'20%'} breakwidth = {'55%'} />
       {isSuccess && <HandleCart onClick  = {click} onClickR = {clickR} item = {item} />}
     {isSuccess &&  <div className = 'product-container'>  { data.map((item) =>{
      return   <Product key = {item._id} img = {imgUrl + item._id + '.png'} info = {item} onClick = {()=>{
        setClick(true)
        setItem(item)
      }} removeButton = {reduxAmount[item._id]}  onClickR = {()=>{
        setClickR(true)
        setItem(item)
      }}/>
      })  }</div> }{isError &&  refetch()  }  
     {
  showFooter&& <div className = 'shop-footer-container'  > 
 <Link className = 'shop-link-continue'  to = '/وارسی'><button className = 'shop-btn-continue'
 > ادامه خرید</button>   </Link> 
  <p> مجموع خرید:  {total} تومان</p>
  </div>
    
     }
</>   )
}

export default ShopPage