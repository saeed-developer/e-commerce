import { increment, addNewItem,removeItem,decrement, itemAmount } from './../../../features/cart/cartSlice.js'
import { useDispatch,useSelector} from 'react-redux';
import { useState , useEffect } from 'react';
import { useGetproductQuery } from './../../../services/shadnakapi.js'
const HandleCart = ({onClick , onClickR,item})=>{
 
    const dispatch = useDispatch()
    const selector = useSelector(state =>state.counter.item)
    const reduxAmount = useSelector(state => state.counter.amount)
    let initial;
    if ( Object.keys(reduxAmount).length === 0 && reduxAmount.constructor === Object){
      initial = {}
    }
    else {
      initial = reduxAmount
    }
    const [amount, setAmount] = useState(initial) 
    const {isSuccess,data ,isError,refetch}  = useGetproductQuery('all')
    isError && refetch()
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
  function clickR(item){
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
    }
  
    },[data,isSuccess])
    useEffect(()=>{
      dispatch(itemAmount(amount))
    },[amount])
         useEffect(()=>{
           
         onClick && click(item)
         },[onClick])
         useEffect(()=>{
           
          onClickR && clickR(item)
          },[onClickR])
         return (
             <>
             </>
         )

}
export default HandleCart