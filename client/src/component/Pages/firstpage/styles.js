import styled from 'styled-components'
export const DesktopNav = styled.section`.container{
    display: flex;
    height: 20%;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;}
 


.navlink{
    color :yellow;
    text-decoration: none;
    &:hover{
        color: black;
        text-decoration-line: underline;
        text-decoration-color: black ;
        text-underline-offset: 1em;
    }
    
}


.logo{
   height:10% ;
   width:10% ;
   padding: 2% 2% 2% 0%;
}
.break{
    width: 88%;
}

.icon{
  display: none;
}
`
export  const MobileNav = styled.section`.container{
    display: flex;
    height: 20%;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;}
 


.navlink{
    display : none;
    color :yellow;
    text-decoration: none;
    &:hover{
        color: black;
        text-decoration-line: underline;
        text-decoration-color: black ;
        text-underline-offset: 1em;
    }
    
}
.logo{
    width:50% ;
    height:auto ;
 }
 .break{
     width: 88%;
 }
 
 .icon{
   display: inline;
 }
 .icon{
    width: 10%;
    padding: 5%;
    height: auto;
    display: inline;
}
 
 `
export const ShowMenu = styled.section`
.container{
    flex-direction : column;
}
.navlink{
     display : inline;
     padding-top :5%;
}
`
export const Slideshow = styled.section`
.container{
    display:flex
    height : 100;
    color : blue;
    background-color : black;
}
.img{
    width : 100%;
    height : 100%
}



`
