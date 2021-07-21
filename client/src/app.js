import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';
//import { Container } from '@material-ui/core';It produce some issue in css margin
import FirstPage from './component/Pages/firstpage/firstpage.js';
import ShopPage from './component/Pages/shoppage/shoppage.js';
import ContactPage from './component/Pages/contactpage/contactpage.js';
import ArticlesPage from './component/Pages/articles/articlespage.js';   // for speed-up loading I should use dynamic import
import AboutPage from './component/Pages/aboutpage.js/aboutpage.js';
import AccountPage from './component/Pages/accountpage.js/accountpage.js';
import CartPage from './component/Pages/cartpage/cartpage.js';
import Theme from './assets/CustomTheme.js';
//import './assets/Font/css/fontiran.css'
import './assets/Font/IranSans/IRANSans.ttf'
import { Typography } from '@material-ui/core';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = ()=>{
return (
  <ThemeProvider theme = {Theme}>
    <StylesProvider jss={jss}> 
        <Typography component={'span'} >
           <Router>
             <Switch>
               <Route path = '/' component = {FirstPage}  exact/> 
               <Route path = '/فروشگاه-شادناک' component = {ShopPage} />  
               <Route path = '/تماس-باما' component = {ContactPage} /> 
               <Route path = '/درباره-ما' component = {AboutPage} /> [301 redirect from my-account]
               <Route path = '/سبد-خرید' component = {CartPage} /> [301 redirect from my-account]
               <Route path = '/حساب-کاربری' component = {AccountPage} /> 
               <Route path = '/مقالات' component = {ArticlesPage} /> 
             </Switch>
           </Router> 
       </Typography>  
    </StylesProvider > 
  </ThemeProvider >
    
         
)

}
export default App