import React from 'react'
import Form from './form'
import Cart from './cart'
import './style.css'
import Header from './../firstpage/header.js'
const Checkoutpage = () => {
    return (
        <>
        <Header logosize = {'20%'} breakwidth = {'55%'}/>
        <div className = 'checkout-page-container'>
            <div className = 'checkout-page-form'>
                <Form/>
            </div>
            <div className = 'checkout-page-cart'>
                <Cart/>
            </div>

            
        </div>
        </>
    )
}

export default Checkoutpage
