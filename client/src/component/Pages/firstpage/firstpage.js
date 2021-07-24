import React from 'react'
import Header from './header.js'
import {SlideShow} from './slideshow.js'
import {PrimaryContent , SeconderyContent} from './content.js'
import './styles.css'
import Footer from './footer.js'
const FirstPage = ()=>{
    return(
        <>
        <Header />
        <SlideShow/>
        <PrimaryContent/>
        <SeconderyContent/>
        <Footer/>
        </>
    )
}
export default  FirstPage 