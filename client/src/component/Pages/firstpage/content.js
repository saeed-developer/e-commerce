import {React} from 'react';
import Garden from './../../../images/zereshk-tree.jpg';
import { useInView  } from 'react-intersection-observer';
import gsap from 'gsap';
import { useGetshadnakcommentsQuery,usePostshadnakcommentQuery } from '../../../services/shadnakapi';
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
   let comments = []
  const {data,isSuccess , isError,error} =  useGetshadnakcommentsQuery()
   isSuccess && data.map(comment => { if (comment._id === "6106a5c48e830dd4ff96ecf4" || comment._id === "6106a5c48e830dd4ff96ecf5"){
     var result =  comments.push(comment.content)   
   }
   return result
  })
  usePostshadnakcommentQuery('saeed')
 
   
    
   isError && console.log(error)
  

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
      {/* کامنت ها باید از دیتابیس گرفته شود و این که از جی اس برای تولید تگ استفاده کنم */}
      <div>
     
        <div> 
           <p>من استفاده کردم خیلی بی‌نظیر بود و از زعفرون ایی که قبلا از بازار میخریدم کیفیتش بیشتر بود </p>
          علی
        </div>
        <div>
          <p> واقعا نسبت به قیمتی که میدید بسیار کیفیت بالایی داره </p> 
          <div style = {{width:'100%'}}></div>
         چمنی
        </div> 
      </div>
    </div>
    </>
  )
}





