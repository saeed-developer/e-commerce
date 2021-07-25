import {React ,useRef,useState} from 'react';
import Garden from './../../../images/zereshk-tree.jpg';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
export const PrimaryContent = () => {
    const sectionRef = useRef(null)
    let intersection = useIntersection(sectionRef,{
      root : null,
      rootMargin : '0px',
      threshold: 0.5
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
    const [animation ,setAnimation] = useState(false)
    if(intersection && intersection.intersectionRatio> 0.5 && !animation) //I didn't find way to remove inter section so i used this
     {fadeIn('.primarycontent')
     setAnimation(prev => prev = true)
    }
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
    threshold: .5
  })
  const sectionRef2 = useRef(null)
  const intersection2 = useIntersection(sectionRef2,{
    root : null,
    rootMargin : '0px',
    threshold: .5
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
  const [animation ,setAnimation] = useState(false)
  const [animation2 ,setAnimation2] = useState(false)
  if(intersection && intersection.intersectionRatio> .5 && !animation){
  fadeIn('.seconderycontent')
  setAnimation(prev => prev = true)
  }
  if(intersection2 && intersection2.intersectionRatio> .5 && !animation2 )
  {fadeIn2('.seconderycontent2')
  setAnimation2(prev => prev = true)
}
  return ( 
    <>
    <div ref = {sectionRef} className = 'seconderycontent'>
      <p > درباره ما</p>
      <p> ما برآنیم که محصولات درجه یک قائنات را بدون واسطه از کشاورز بدست شما  برسانیم </p>
      <button> اطلاعات بیشتر</button>  
    </div>
    <div ref = {sectionRef2} className = 'seconderycontent2' >
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





