import React,{Suspense} from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';
import Theme from './assets/CustomTheme.js';
import './assets/Font/IranSans/IRANSans.ttf'
import { Typography } from '@material-ui/core';
import Waiting from './waiting.js';
import {useGeturlQuery } from './services/shadnakapi.js';

const FirstPage = React.lazy(()=>import ('./component/Pages/firstpage/firstpage.js'));
const ShopPage = React.lazy(()=> import ('./component/Pages/shoppage/shoppage.js'));
const ArticlesPage = React.lazy(()=> import ('./component/Pages/articles/articlespage.js'));
const AboutPage = React.lazy(()=> import ('./component/Pages/aboutpage/aboutpage.js'));
const AccountPage = React.lazy(()=> import('./component/Pages/accountpage/accountpage.js')); 
const CartPage = React.lazy(()=> import('./component/Pages/cartpage/cartpage.js'))
const Guidepage = React.lazy(()=> import('./component/Pages/guidepage/guidepage.js')); 
const ContactPage = React.lazy(()=> import ('./component/Pages/contactpage/contactpage.js'));
const Checkoutpage = React.lazy (()=> import ('./component/Pages/checkoutpage/checkoutpage.js'))
const ProductPage = React.lazy(()=>import ('./component/Pages/productpage/productpage'))
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = ()=>{ 
const {data , isSuccess ,refetch , isError} = useGeturlQuery('product')
isError && refetch()


return ( 
  <ThemeProvider theme = {Theme}>
    <StylesProvider jss={jss}> 
      <Typography component={'span'} >
        <Router>
           <Suspense fallback= {Waiting}>
             <Switch>
               <Route path = '/' component = {FirstPage}  exact/> 
               <Route path = '/فروشگاه-شادناک' component = {ShopPage} exact/>  
               <Route path = '/تماس-باما' component = {ContactPage} /> 
               <Route path = '/درباره-ما' component = {AboutPage} /> 
               <Route path = '/سبد-خرید' component = {CartPage} /> 
               <Route path = '/حساب-کاربری' component = {AccountPage} /> 
               <Route path = '/مقالات' component = {ArticlesPage} /> 
               <Route path = '/راهنمای-خرید' component = {Guidepage}/>
               <Route path = '/وارسی' component = {Checkoutpage}/>
               {isSuccess && data[0].product.map((item)=>{
                 return <Route path = {item.path} key = {item.id} > <ProductPage id = {item.id} /> </Route>
               })}
             </Switch>
            </Suspense>    
        </Router> 
      </Typography>
    </StylesProvider>
  </ThemeProvider>
     
    
         
)

}
export default App