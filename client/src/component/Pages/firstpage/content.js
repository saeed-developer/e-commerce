import {React ,useRef} from 'react';
import Garden from './../../../images/zereshk-tree.jpg';
import {useIntersection} from 'react-use';

import gsap from 'gsap';
export const PrimaryContent = () => {
    const sectionRef = useRef(null)
    const intersection = useIntersection(sectionRef,{
      root : null,
      rootMargin : '0px',
      threshold: 0.5
    })
    const fadeIn = elem=>{
      gsap.to(elem,2,{
        opacity:1,
        y: -60,
        ease:'power4.out',
        stagger:{
          amount:0.3
        }
    })}
    intersection && intersection.intersectionRatio> 0.5 &&
     fadeIn('.primarycontent')
    return (
          <div ref = {sectionRef} className = 'primarycontent'  >       
          <p  className = 'content-paragraph'>  خرید زرشک و زعفران بدون واسطه از کشاورزان قاینات  </p>
          <img className = 'content-image' src = {Garden} alt = 'باغ-زرشک-شادناک'/>  
        </div>   
    )
}


export const SeconderyContent = () => {
  const sectionRef = useRef(null)
  const intersection = useIntersection(sectionRef,{
    root : null,
    rootMargin : '0px',
    threshold: .9
  })
  const sectionRef2 = useRef(null)
  const intersection2 = useIntersection(sectionRef2,{
    root : null,
    rootMargin : '0px',
    threshold: .5
  })
  const fadeIn = elem=>{
    gsap.to(elem,2,{
      opacity:1,
      y: -60,
      ease:'power4.out',
      stagger:{
        amount:0.3
      }
  })}
  intersection && intersection.intersectionRatio> .9 &&
  fadeIn('.seconderycontent')
  intersection2 && intersection2.intersectionRatio> .5 &&
  fadeIn('.seconderycontent2')
  return ( 
    <>
    <div ref = {sectionRef} className = 'seconderycontent'>
      <p > درباره ما</p>
      <p> ما برآنیم که محصولات درجه یک قائنات را بدون واسطه از کشاورز بدست شما  برسانیم </p>
      <button> اطلاعات بیشتر</button>  
    </div >
    <div ref = {sectionRef2} className = 'seconderycontent2' >
    <div> نظر خریداران</div>
    
    <div>علی</div>
   
    
      <div>
        
        چمنی</div> 
     
    </div>
    </>
  )
}





