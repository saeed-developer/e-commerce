import {TiShoppingCart} from 'react-icons/ti'
import { IconContext } from "react-icons";
import { useSelector } from 'react-redux';
import { useGetproductQuery } from '../../../services/shadnakapi'

const Cart = () => {
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

          {isSuccess && cart.map(item=>{
            const amount = item.amount
            const price = item.price.onSale? Number(item.price.onSale) * Number(item.amount) + ' تومان':Number(item.price.original)*Number(item.amount)
                    + ' تومان'
          return (<div style = {{textAlign : 'center' , fontSize :'1.3vmax'}}> 
                    <span>{item.name}</span>
                    <span style = {{marginRight:'2%'}}>
                    &#10005;
                    {amount}
                    </span>
                   <div style = {{display:'inline' ,marginRight:'10%'}}> <span >{price}</span></div>
                 </div>)
          })}
          {isSuccess && 
          cart.length > 0 && (
          <div style = {{fontSize : '1.3vmax'}}><hr></hr>
            <span> مجموع خرید :  </span>
            <span>{total} تومان</span>
            <span style = {{marginRight:'10%'}}> کد تخفیف:</span>
            <input style = {{marginRight:'5%' , fontSize : '1.3vmax'}}></input>
          </div>
          )
          }
        </div>
        </>
    )
}

export default Cart
