import styled from 'styled-components'
export const DesktopNav = styled.section`.container{
    direction:rtl;
    display: flex;
    height: 20%;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;}
 


.navlink{
    color :#e1bb23;
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
    direction:rtl;
    display: flex;
    height: 20%;
    width: 100%;
    flex-wrap: wrap;
    align-items: ${props => props.item || "center"};
    justify-content: ${props => props.item || "center"}
    }
 


.navlink{
    display : none;
    color :#e1bb23;
    text-decoration: none;
    &:hover{
        color: black;
        text-decoration-line: underline;
        text-decoration-color: black ;
        text-underline-offset: 1em;
    }
    
}
.logo{
    width:${props => props.logosize || "50%"};
    height:auto ;
    padding:0%;
 }
 .break{
     width: ${ props => props.breakwidth || '100%'};
 }
 

 .icon{
  display: inline; 
  width: 10%;
  padding-top: 4%;
  height: auto;
    cursor:pointer;
 }
 `
export const ShowMenu = styled.section`
.container{
    flex-direction:column;
}
.navlink{ 
     display:inline;
     padding-top :5%;
}
`




