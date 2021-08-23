import React from 'react';
import Header from '../firstpage/header'
import { useGetproductQuery } from '../../../services/shadnakapi';
import Product from './product.js';
import { increment, addNewItem,removeItem,decrement, itemAmount } from '../../../features/cart/cartSlice';
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
   let addition = amount[item._id] + 1
   setAmount({...amount,[item._id]:addition})
  
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
let subtract = amount[item._id]- 1

setAmount( {...amount,[item._id]:subtract})
} 
  const reduxAmount = useSelector(state => state.counter.amount)
  let initial;
  
  if ( Object.keys(reduxAmount).length === 0 && reduxAmount.constructor === Object){
    initial = {}
    console.log('it is undefined')
  }
  else {
    initial = reduxAmount
  }
 
  
  const [amount, setAmount] = useState(initial) 
  const {isSuccess,data ,isError,refetch}  = useGetproductQuery('all')
  const imgUrl = process.env.REACT_APP_URL + '/product-image?id='
  useEffect(()=>{
  let initialAmount = {}
  if (isSuccess){
    for (let x of data){
     let property = x._id
     initialAmount[property] = 0
    } 
  }
   if(Object.keys(reduxAmount).length === 0 && reduxAmount.constructor === Object){
   setAmount(initialAmount)
   console.log('triggred')
  }

  },[data,isSuccess])
  useEffect(()=>{
    dispatch(itemAmount(amount))
   
    
  },[amount])
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
      }} removeButton = {reduxAmount[item._id]}  onClickR = {()=>{
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