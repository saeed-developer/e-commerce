import {TiShoppingCart} from 'react-icons/ti'
import { IconContext } from "react-icons";
import { useSelector } from 'react-redux';
import Button from './../../../stories/button.js'
import {  useState } from 'react';
import { useGetproductQuery } from '../../../services/shadnakapi'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {decrement} from '../../../features/cart/cartSlice.js';
const Cart = () => {
  const dispatch = useDispatch()
  const [disCount,setDiscount] = useState('')
  const {data,isSuccess} = useGetproductQuery('all')
  const product = useSelector(state => state.counter.amount)
  const total = useSelector(state => state.counter.total)
  let cart = []
 if(isSuccess){
  for(let x in product){
    if (product[x] > 0){
     for (let y of data){
       if(y._id === x ){
         cart.push({name : y.name , price : y.price , amount: product[x]})
       }
     }
     }
    }
  }
 
  const click = ()=>{
   axios.post(`${process.env.REACT_APP_URL}/discount-code`,{},{
     params :{
       key :disCount
     }
   })
   .then(res =>{
    if(res.status === 200){
     dispatch(decrement(Number(res.data.مبلغ)))
    }}
    
    )
   .catch(err => alert(err.response.data.message)) 
  }
  const change = (e)=>{
  setDiscount(e.target.value)
  }
    return (
      <>
        <div checkout-page-cart-container>
          <div>
           <IconContext.Provider value = {{size : '1.5vmax'}}>
             <TiShoppingCart/>
            </IconContext.Provider>
           <span style = {{fontSize:'1.5vmax'}}>خلاصه سبد خرید</span>
          </div>
          <hr ></hr>

          {isSuccess && 
          cart.length > 0 &&
          <table style = {{width:'100%' , fontSize:'1.3'}} >
           <tr >
             <th>کالا</th>
             <th>تعداد</th>
             <th> قیمت</th>
           </tr>
           {cart.map(item=>{
            const amount = item.amount
            const price = item.price.onSale? Number(item.price.onSale) * Number(item.amount) :Number(item.price.original)*Number(item.amount)
            
          return (<tr style = {{textAlign : 'center' , fontSize :'1.3vmax'}}> 
                    <td>{item.name}</td>
                    <td >
                    <input style = {{fontSize : '1.3vmax', width :'10%'}} value ={amount}  />
                    </td>
                   <td > {price} تومان</td>
                 </tr>)
          })}
          </table>
          
          }
          {isSuccess && 
          cart.length > 0 && (
          <div style = {{fontSize : '1.3vmax'}}>
            <hr></hr>
            <span> مجموع خرید :  </span>
            <span>{total} تومان</span>
            <span style = {{marginRight:'10%'}}> کد تخفیف:</span>
            <input value = {disCount} onChange = {change}    style = {{marginRight:'2%' , fontSize : '1.2vmax' ,width:'20%'}}></input>
            <span style = {{marginRight:'2%' , fontSize : '1.2vmax' ,width:'20%' , display : 'inline-block'}}>
            <Button value = 'ثبت' onClick = {click} />
            </span>
          </div>
          )
          }
        </div>
        </>
    )
}

export default Cart
