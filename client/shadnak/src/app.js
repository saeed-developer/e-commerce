import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import FirstPage from './component/Pages/firstpage/firstpage.js';
import ShopPage from './component/Pages/shoppage/shoppage.js';
import Theme from './assets/CustomTheme.js';
//import './assets/Font/css/fontiran.css'
//import './assets/Font/css/style.css'
import { Typography } from '@material-ui/core';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = ()=>{
return (
 <ThemeProvider theme = {Theme}>
     <StylesProvider jss={jss}> 
       <Container maxWidth="lg">
         <Typography component={'span'} >
           <Router>
             <Switch>
               <Route path = '/' component = {FirstPage}  exact/> 
               <Route path = '/shop' component = {ShopPage} />  
             </Switch>
           </Router>
         </Typography>
       </Container>
     </StylesProvider>
  </ThemeProvider>
)

}
export default App