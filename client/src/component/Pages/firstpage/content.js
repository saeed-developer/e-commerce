import {React} from 'react';
import Garden from './../../../images/zereshk-tree.jpg';
import { useInView  } from 'react-intersection-observer';
import gsap from 'gsap';
import { usePostshadnakcommentQuery } from '../../../services/shadnakapi';
export const PrimaryContent = () => {
  const { ref, inView } = useInView(
    {
      root : null,
      threshold: 0.5,
      triggerOnce:true,
    })
    const fadeIn = elem=>{
      gsap.to(elem,{
        duration:2,
        opacity:1,
        ease:'power4.out',
        stagger:{
          amount:0.3
        }
    })}
    inView&&
      fadeIn('.primarycontent')
       
    return (
          <div ref = {ref} className = 'primarycontent'  >       
          <p  className = 'content-paragraph'>  خرید زرشک و زعفران بدون واسطه از کشاورزان قاینات  </p>
          <img className = 'content-image' src = {Garden} alt = 'باغ-زرشک-شادناک'/>  
        </div>   
    )
}
export const SeconderyContent = () => {
  const {data,isSuccess} = usePostshadnakcommentQuery(["6106a5c48e830dd4ff96ecf4" ,"6106a5c48e830dd4ff96ecf5"] )
  const { ref, inView } = useInView(
    {
      root : null,
      threshold: 0.5,
      triggerOnce:true,
    })
    const [ ref2, inView2 ] = useInView(
      {
        root : null,
        threshold: 0.5,
        triggerOnce:true,
      })
  
  const fadeIn = elem=>{
    gsap.from(elem,{
      duration:2,
      opacity:1,
       x:100,
       ease:'power4.out',
      stagger:{
        amount:.3
      }   
  })}
  const fadeIn2 = elem=>{
    gsap.to(elem,{
      duration:2,
      opacity:1,
       ease:'power4.out',
      stagger:{
        amount:.3
      }   
  })}
  inView&&
    fadeIn('.seconderycontent')   
  inView2&&
    fadeIn2('.seconderycontent2')
  return ( 
    <>
    <div ref = {ref} className = 'seconderycontent'>
      <p > درباره ما</p>
      <p> ما برآنیم که محصولات درجه یک قائنات را بدون واسطه از کشاورز بدست شما  برسانیم </p>
      <button> اطلاعات بیشتر</button>  
    </div>
    <div ref = {ref2} className = 'seconderycontent2' >
      <div> نظر خریداران</div>
       {isSuccess&& 
       <div>
          <div> <p> {data[0].content}</p> {data[0].name}</div>
          <div><p> {data[1].content}</p> 
          <div style = {{width:'100%'}}></div>
          {data[1].name}
          </div> 
       </div>
       }      
    </div>
    </>
  )
}





