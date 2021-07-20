
import React from 'react'
import Garden from './../../../images/zereshk-tree.jpg'

const PrimaryContent = ({display }) => {
  
    return (
        <div className = 'primarycontent'  style = {{display: display }}>
          
          <p  className = 'content-paragraph'>  خرید زرشک و زعفران بدون واسطه از کشاورزان قاینات  </p>
          <img className = 'content-image' src = {Garden} alt = 'باغ-زرشک-شادناک'/>
         
        </div>
        
    )
}

export default PrimaryContent

