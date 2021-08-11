import React from 'react'

const Product = ({img,info}) => {
    return (
        <div className = 'item-container'>
            <img src = {img} className ='product-img' alt = {info.name}  />
            <p>{info.category}</p>
            <p>{info.name}</p>
              {info.price.onSale ?<div> <p style = {{textDecoration :'line-through'}}>{info.price.original} </p> <p> {info.price.onSale}</p>  </div>:
              <div><p> {info.price.original}</p></div>}   
            <button className = 'btn'> افزودن به سبد خرید</button>
        </div>
    )
}

export default Product
