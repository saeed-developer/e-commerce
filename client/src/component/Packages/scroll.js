import React from 'react';
import { useState} from  'react';
import PrimaryContent from '../Pages/firstpage/content';

const Scroll = ({children,heighttoshow}) => {
    const [isVisible, setIsVisible] = useState(false);
    const listenToScroll = () => {
        let heightToshow = heighttoshow
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        
    
        if (winScroll > heightToshow) {  
            setIsVisible(true);
            
        } else {
             setIsVisible(false);
        }  
      }; 
    
        window.addEventListener("scroll", listenToScroll);
     
      
      
    return (
        <>
            {isVisible ? (
                <div>
                   {<PrimaryContent display = 'flex' />}
                </div>
            ):
            (
                <div>
                    {<PrimaryContent display = 'flex'/>}
                </div>
            )
            }
        </>
    )
}

export default Scroll
