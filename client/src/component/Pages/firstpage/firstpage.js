import React from 'react'
import Header from './header.js'
import SlideShow from './slideshow.js'
import Scroll from '../../Packages/scroll.js'
const FirstPage = ()=>{


    return(
        <>
        <Header />
        <SlideShow/>
        <Scroll  heighttoshow = {100} />
        
        
        </>
    )
}
export default  FirstPage 