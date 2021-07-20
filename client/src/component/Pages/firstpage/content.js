import {React ,useRef} from 'react';
import Garden from './../../../images/zereshk-tree.jpg';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
const PrimaryContent = () => {
    const sectionRef = useRef(null)
    const intersection = useIntersection(sectionRef,{
      root : null,
      rootMargin : '0px',
      threshold: 0.5
    })
    const fadeOut = elem=>{
    gsap.to(elem,1,{
      opacity:0,
      y: -20,
      ease:'power4.out'
    })}
    const fadeIn = elem=>{
      gsap.to(elem,2,{
        opacity:1,
        y: -60,
        ease:'power4.out',
        stagger:{
          amount:0.3
        }
    })}
    intersection && intersection.intersectionRatio< 0.5 ?
    fadeOut('.primarycontent'): fadeIn('.primarycontent')
    return (
          <div ref = {sectionRef} className = 'primarycontent' >       
          <p  className = 'content-paragraph'>  خرید زرشک و زعفران بدون واسطه از کشاورزان قاینات  </p>
          <img className = 'content-image' src = {Garden} alt = 'باغ-زرشک-شادناک'/>  
        </div>
        
    )
}

export default PrimaryContent

