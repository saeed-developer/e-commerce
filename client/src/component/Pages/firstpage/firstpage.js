import React from 'react'
import Header from './header.js'
import {SlideShow} from './slideshow.js'
import {PrimaryContent , SeconderyContent} from './content.js'
import './styles.css'
import Footer from './footer.js'
import { useGetcontentQuery } from '../../../services/shadnakapi.js'

const FirstPage = ()=>{
   const {data,isError,refetch,isSuccess} = useGetcontentQuery({key : ''})
  isError && setInterval(()=>{
      refetch()
  },1000)
  console.log(data)
    return(
        <>
       
        <Header />
        <SlideShow/> 
        <PrimaryContent/>
        { isSuccess && data.map((item)=>{
            if(item.section === 'content') return <SeconderyContent  content  = {<div dangerouslySetInnerHTML={{__html: item.content}} />}/>
            if(item.section === 'footer') return <Footer content  = {<div dangerouslySetInnerHTML={{__html: item.content}} />}/>
        })}
        </>
    )
}
export default  FirstPage 