import React from 'react';
import Header from '../firstpage/header'
import { useGetproductQuery } from '../../../services/shadnakapi';
import Product from './product.js';
import { increment, addNewItem,removeItem,decrement } from '../../../features/cart/cartSlice';
import { useDispatch,useSelector} from 'react-redux';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const ShopPage = ()=>{
  const dispatch = useDispatch()
  const selector = useSelector(state =>state.counter.item)
  function click(item){
    let price;
    if (item.price.onSale !=null){
    price = item.price.onSale
  }
    else {
    price = item.price.original
  }
   dispatch(addNewItem(item))
   dispatch(increment( price ))
   setShowBtn({...showBtn,[item._id]:true})
}
function onClickR(item){
const id = item._id
let items = [...selector]
const index = items.findIndex((i)=>{
return i._id === id
})
items.splice(index,1)
dispatch(removeItem(items))
let price;
if (item.price.onSale !=null){
  price = item.price.onSale
}
else  {
  price = item.price.original
}
dispatch(decrement(price))
 
let amount = 0
for(let x of items){
 if(x._id === item._id){
     amount++
 }
}
if(amount === 0){
setShowBtn({...showBtn,[item._id]:false})
}
}
  const [showBtn , setShowBtn] = useState({})
  const {isSuccess,data ,isError,refetch}  = useGetproductQuery('all')
  const imgUrl = process.env.REACT_APP_URL + '/product-image?id='
  useEffect(()=>{
  let obj = {}
  if (isSuccess){
    for (let x of data){
     let property = x._id
     obj[property] = false
    }
  }
 
   setShowBtn(obj)
  },[data,isSuccess])
       let total = useSelector(state =>state.counter.total) 
       let showFooter
       if (total=== 0){
         showFooter = false
       }
       else if (total>0){
         showFooter = true
       }
    return (
        < >  
      <Header logosize = {'20%'} breakwidth = {'55%'} />
     {isSuccess &&  <div className = 'product-container'>  { data.map((item) =>{
      return   <Product key = {item._id} img = {imgUrl + item._id + '.png'} info = {item} onClick = {()=>{
        click(item)
      }} removeButton = {showBtn[item._id]}  onClickR = {()=>{
        onClickR(item)
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