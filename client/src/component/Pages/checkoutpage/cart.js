import {TiShoppingCart} from 'react-icons/ti'
import { IconContext } from "react-icons";
import { useSelector } from 'react-redux';
import Button from './../../../stories/button.js'
import {  useState  , useEffect} from 'react';
import { useGetproductQuery } from '../../../services/shadnakapi'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {decrement , increment, itemAmount} from '../../../features/cart/cartSlice.js';
import {AiFillCloseSquare} from 'react-icons/ai';
const Cart = () => {
  const dispatch = useDispatch()
  const [disCount,setDiscount] = useState('')
  const [isDiscount,setIsdDiscount] = useState(0)
  const {data,isSuccess} = useGetproductQuery('all')
  const product = useSelector(state => state.counter.amount)
  const total = useSelector(state => state.counter.total)
  const [cart,setCart] = useState([])
  useEffect(()=>{
     if(total < 0){
       let additon = Number(isDiscount)
       dispatch(increment(additon))
       setIsdDiscount(0)
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[total])
useEffect(()=>{
for(let x in product){
    if (product[x] > 0){
     for (let y of data){
       if(y._id === x ){
         setCart(cart => [...cart,{name : y.name , price : y.price , amount: product[x] ,id : y._id}])
       }
     }
     }}
// eslint-disable-next-line react-hooks/exhaustive-deps
},[isSuccess])
  const click = ()=>{
   axios.post(`${process.env.REACT_APP_URL}/discount-code`,{},{
     params :{
       key :disCount
     }
   })
   .then(res =>{
    if(res.status === 200){
     dispatch(decrement(Number(res.data.مبلغ)))
     setIsdDiscount(res.data.مبلغ)
     setDiscount('')
    }}
    
    )
   .catch(err =>
    err.response.data.message ?alert(err.response.data.message):alert('ورودی نامعتبر')
    ) 
  }
  const change = (e)=>{
  setDiscount(e.target.value)
  }
  const onChange = (e,item) =>{
   
    let difference;
    let amount;
    let newCart = cart
    let price;
    if (item.price.onSale !=null){
      price = item.price.onSale
    }
    else  price = item.price.original
    for (let x of  newCart){
       if (x.id === item.id){
         difference = (e.target.value - x.amount)
         x.amount = Number(e.target.value)

       }
    }
    if(difference > 0){
       amount = difference * price
      dispatch(increment(amount))
    }
    else if (difference< 0){
     amount =  Math.abs(difference) * price
     dispatch(decrement(amount))
    }
    setCart(newCart)
    dispatch(itemAmount({...product,[item.id]:Number(e.target.value)}))
  }
    return (
      <>
        <div className = 'checkout-page-cart-container'>
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
            <thead>
             <tr>
             <th>کالا</th>
             <th>تعداد</th>
             <th> قیمت</th>
           </tr>
           </thead>
           <tbody>
           {cart.map(item=>{
            const price = item.price.onSale? Number(item.price.onSale) * Number(item.amount) :Number(item.price.original)*Number(item.amount)
          return (<tr key = {item.id} style = {{textAlign : 'center' , fontSize :'1.3vmax'}}> 
                    <td>{item.name}</td>
                    <td >
                    <input style = {{fontSize : '1.3vmax', width :'10%'}} value ={item.amount} onChange =
                    {(e)=>onChange(e,item)}/>
                    </td>
                   <td > {price} تومان</td>
                 </tr>)
          })}
          </tbody>
          </table>
          
          }
          {isSuccess && 
          cart.length > 0 && total > 0 &&(
          <div style = {{fontSize : '1.3vmax'}}>
            <hr></hr>
            <span> مجموع خرید :  </span>
            <span>{total} تومان</span>
            {isDiscount?
             <div style = {{display : 'inline-block' , marginRight:'5%'}}>
             <span>میزان تخفیف:  </span>
             <span style = {{display : 'inline-block' }}>{isDiscount}</span>
             <AiFillCloseSquare onClick = {()=>{
               dispatch(increment(Number(isDiscount)))
               setIsdDiscount(0)
             }}/>
             </div>
            :<div style = {{display : 'inline' ,width :'100%'}}>
               <span style = {{marginRight:'5%'}}> کد تخفیف:</span>
               <input value = {disCount} onChange = {change}    style = {{marginRight:'2%' , fontSize : '1.2vmax' ,width:'20%'}}></input>
               <span style = {{marginRight:'2%' , fontSize : '1.2vmax' ,width:'20%' , display : 'inline-block'}}>
               <Button  value = 'ثبت' onClick = {click} />
            </span>
            </div>
            }
           
          </div>
          )
          }
        </div>
        </>
    )
}
export default Cart
