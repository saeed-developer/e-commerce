//import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import logo from './../../../images/Logo-Shadnak.png' 
//import MenuIcon from '@material-ui/icons/Menu';
//import FetchData from './../../../api.js'
//First I decided to use materil-ui but it was  messy and i didn't like it
const Header = ()=>{
    
    return ( 
      
        <header className = 'container'>
        <img src ={logo} alt ='لوگو شادناک' className = 'logo' ></img>
        <div className = 'break'></div>
        <Link  to ='/'  className = 'navlink'> 
        </Link>
        <Link  to = '/فروشگاه-شادناک' className = 'navlink' > 
        فروشگاه آنلاین
        </Link>
        <Link  to = 'تماس-باما'  className = 'navlink'> 
        تماس با ما
        </Link>
        <Link  to = '/درباره-ما' className = 'navlink'> 
        درباره ما
        </Link>
        <Link  to = '/حساب-کاربری' className = 'navlink'> 
        حساب کاربری
        </Link>
        <Link  to = '/سبد-خرید' className ='navlink' > 
        سبدخرید
        </Link>
        <Link  to = '/مقالات' className ='navlink' > 
        مقالات
        </Link>
        </header>
      
    )
}
export default Header