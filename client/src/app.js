import React,{Suspense} from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';
import Theme from './assets/CustomTheme.js';
import './assets/Font/IranSans/IRANSans.ttf'
import {  Typography } from '@material-ui/core';
import Waiting from './waiting.js';
import {useGeturlQuery } from './services/shadnakapi.js';
const pages = {
  FirstPage :  React.lazy(()=>import ('./component/Pages/firstpage/firstpage.js')),
  ShopPage:React.lazy(()=> import ('./component/Pages/shoppage/shoppage.js')),
  ArticlesPage: React.lazy(()=> import ('./component/Pages/articles/articlespage.js')),
  AboutPage : React.lazy(()=> import ('./component/Pages/aboutpage/aboutpage.js')),
  AccountPage :React.lazy(()=> import('./component/Pages/accountpage/accountpage.js')),
  Guidepage:React.lazy(()=> import('./component/Pages/guidepage/guidepage.js')),
  ContactPage : React.lazy(()=> import ('./component/Pages/contactpage/contactpage.js')),
  Checkoutpage : React.lazy (()=> import ('./component/Pages/checkoutpage/checkoutpage.js')),
}
const ProductPage  =  React.lazy(()=>import ('./component/Pages/productpage/productpage'))
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = ()=>{ 
const {data , isSuccess ,refetch , isError} = useGeturlQuery()
isError &&
    setInterval(() => {
        refetch()
    }, 1000);

   
return ( 
  <ThemeProvider theme = {Theme}>
    <StylesProvider jss={jss}> 
      <Typography component={'span'} >
        <Router>
           <Suspense fallback= {Waiting}>
             <Switch>
               {isSuccess && data.map((item)=>{
                 if(item.pathName === 'ProductPage'){
                 return < Route path = {item.path} key = {item._id} > <ProductPage id = {item.productId}  /> </Route>}
                 else {
                   const {pathName} = item
                   return <Route path = {item.path} key = {item._id}  component = {pages[pathName]} exact />
                 }
               }
               )}
             </Switch>
            </Suspense>    
        </Router> 
      </Typography>
    </StylesProvider>
  </ThemeProvider>        
)
}
export default App