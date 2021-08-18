import React from 'react'

const ProductPage = ({id}) => {
    return (
        <div style = {{fontSize : '3vmax'}}>
           <p>صفحه محصول</p> 
           {id}
        </div>
    )
}

export default ProductPage
