import React from 'react'
import Form from './form'
import Cart from './cart'
import './style.css'
import { useMedia } from 'react-use'
import Header from './../firstpage/header.js'
//باید چک کنم اگر موبایل بود اول کارت قرار بگیرد بعد فرم
const Checkoutpage = () => {
    const desktop = (<div className = 'checkout-page-container'>
            <div className = 'checkout-page-form'>
                <Form/>
            </div>
            <div className = 'checkout-page-cart'>
                <Cart/>
            </div> 
        </div>)
    const mobile = 
    (<div className = 'checkout-page-container'>
            <div className = 'checkout-page-cart'>
                <Cart/>
            </div>
            <div className = 'checkout-page-form'>
                <Form/>
            </div> 
        </div>)
    const isMobile = useMedia('(max-width: 768px)')
    return (
        <>
        <Header logosize = {'20%'} breakwidth = {'55%'}/>
        {isMobile ? mobile : desktop}
        </>
    )
}

export default Checkoutpage
