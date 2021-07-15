/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './styles.css'
import logo from './../../../images/Logo-Shadnak.png' 
import MenuIcon from './../../../images/menu-icon.png'
import {useMediaQuery} from 'react-responsive';
import  './styles.js';
import { DesktopNav ,MobileNav,ShowMenu } from './styles.js'; //Maybe I shoud use dynamic redering for speed-up loading
//import FetchData from './../../../api.js'
//First I decided to use materil-ui but it was  messy and i didn't like it
const Header = ()=>{ 
   const[open , setOpen]=useState(false)
   const handleMediaQueryChange = ()=> {
    if(isMobile === false && open === true){
      setOpen(prev => prev = false)
    }
  }
  const isMobile = useMediaQuery(
    { maxDeviceWidth: 708 }, undefined,handleMediaQueryChange
  );
   const content = (
    <header className='container' >
    <img src ={logo} alt ='لوگو شادناک' className = 'logo' ></img>
    <div className = 'break'></div>
    <img  src = {MenuIcon} onClick={()=>{
       setOpen(prev => !prev)
       
    }} className = 'icon' alt='فهرست'> 
      </img>
    
    <Link  to ='/'   className = 'navlink'> 
    </Link>
    <Link  to = '/فروشگاه-شادناک'   className = 'navlink' > 
    فروشگاه آنلاین
    </Link>
    <Link  to = 'تماس-باما'  className = 'navlink' > 
    تماس با ما
    </Link>
    <Link  to = '/درباره-ما' className = 'navlink'  > 
    درباره ما
    </Link>
    <Link  to = '/حساب-کاربری'  className = 'navlink' > 
    حساب کاربری
    </Link>
    <Link  to = '/سبد-خرید'   className = 'navlink' > 
    سبدخرید
    </Link>
    <Link  to = '/مقالات'   className = 'navlink' > 
    مقالات
    </Link>  
    </header>)
    return (  
      <>
       
        {isMobile ? <MobileNav> {open ? <ShowMenu>{content}</ShowMenu>:content}  </MobileNav> :
         <DesktopNav> {content}</DesktopNav>}
        
      </>
       
    )
}
export default Header