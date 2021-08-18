import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch,Switch,Route} from 'react-router'
import { Link } from 'react-router-dom'
const ProductPage = React.lazy(()=>import('./../productpage/productpage.js'))



const Product = ({img,info,onClick,removeButton,onClickR}) => {
   let items = useSelector(state=> state.counter.item)
   let amount = 0
   for(let x of items){
    if(x._id === info._id){
        amount++
    }
   }
   
    return (
        <>
       
            
           
        
        <div  className = 'item-container'  >
            <img src = {img} className ='product-img' alt = {info.name}  />
            <p>{info.category}</p>
            <p>{info.name}</p>
           {/*<Link to = {`${url}/ok`} className = 'shop-link'> مشاهد محصول</Link>*/}
            {info.price.onSale ?<div> <p style = {{textDecoration :'line-through'}}>{info.price.original} تومان</p> <p> {info.price.onSale} تومان</p>  </div>:
            <div><p> {info.price.original} تومان</p></div>}   
            <button  className = 'shop-btn' onClick= {onClick} > افزودن به سبد خرید</button>
            
            <p> تعداد:{amount}</p>{/*  با کلس بی تی ان در رندر اولیه با بی تی ان دیگر فایل های سی اس اس مشکل پیدا میکرد*/}
            {removeButton && <button className = 'shop-btn' onClick ={onClickR} >  حذف از سبد خرید</button> }
          
        </div>     
        </>
       
    )
}

export default Product
