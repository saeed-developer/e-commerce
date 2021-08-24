
import React from "react"
import { useState } from "react"
const Button = ({width,fontSize,value,margin , onClick}) => {
    const [style ,setStyle] = useState({
            width: width||'50%' ,
            margin: margin || '0',
            color: 'white',
            border:'3px solid #2FE92B',
            fontSize:fontSize || '1.2vmax',
            backgroundColor: '#2FE92B' ,       
    })
   
    return (
       
        <button onClick = {onClick} style = {style}  onMouseOver= {()=>{
       setStyle({...style,color:'#e1bb23',backgroundColor:'inherit' ,cursor:'pointer'})
        }} onMouseLeave = {()=>{
            setStyle({...style,color:'white',backgroundColor:'#2FE92B'}) 
        }}>
        {value}

        </button>
        
    )
}

export default Button
