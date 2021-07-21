import React from 'react'
import Header from './header.js'
import {SlideShow} from './slideshow.js'
import {PrimaryContent , SeconderyContent} from './content.js'
const FirstPage = ()=>{
    return(
        <>
        <Header />
        <SlideShow/>
        <PrimaryContent/>
        <SeconderyContent/>
        </>
    )
}
export default  FirstPage 