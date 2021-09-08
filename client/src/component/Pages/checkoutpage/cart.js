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
