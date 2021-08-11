import React from 'react'

const Product = ({img,info}) => {
    return (
        <div className = 'item-container'>
            <img src = {img} className ='product-img' alt = {info.name}  />
            <p>{info.category}</p>
            <p>{info.name}</p>
            <p>{info.price.original}</p>
            <p>  {info.price?.onSale}   </p>
            <button> افزودن به سبد خرید</button>
        </div>
    )
}

export default Product
