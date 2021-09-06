import React from 'react'
import Form from './form'
import Cart from './cart'
import './style.css'
const Checkoutpage = () => {
    return (
        <div className = 'checkout-page-container'>
            <div className = 'checkout-page-form'>
                <Form/>
            </div>
            <div className = 'checkout-page-cart'>
                <Cart/>
            </div>

            
        </div>
    )
}

export default Checkoutpage
