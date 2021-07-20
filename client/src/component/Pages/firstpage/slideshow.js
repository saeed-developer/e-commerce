//this component is work but it's not responsive so I should change css code and maybe rewrite it!
import React from 'react'
import Slider from "react-slick";
import './../../../../node_modules/slick-carousel/slick/slick.css'
import "./../../../../node_modules/slick-carousel/slick/slick-theme.css";
import './styles.css'
import one from './../../../images/saffron-flower.jpg'
import two from './../../../images/zereshk-branch.jpg'
import three from './../../../images/saffron-sargol.jpg'
import { Link } from 'react-router-dom';
import './styles.css'
const SlideShow = () => {
    const settings = {
      
       slidesToScroll:1,
       slidesToShow:1,
       speed: 1000,
       infinite: true,
       accessibility : true,
       rtl:true,
       autoplay:true,
       autoplaySpeed: 3000,
       swipeToSlide: true, 
    }; 
return (
<div className = 'slider-wrapper'> 
 <Slider {...settings} >
     
  <div className="slick-slide">
  <img className="slick-slide-image" src={one} alt = 'گل زعفران' />
  <label className="slick-slide-label">گل زعفران</label>
  <label className="slick-slide-label-2">زعفران گیاهی کوچک و چند ساله به ارتفاع 10 تا 30 سانتی متر است که خواص دارویی دارد</label>
  <button className = 'btn'><Link style = {{color : 'black',textDecoration:'none'}} to = '/مقالات ' >
      خرید آنلاین
      </Link>
    </button>
  </div>
  <div className="slick-slide">
  <img className="slick-slide-image" src={two} alt = 'درخت زرشک' />
  <label className="slick-slide-label">زرشک اعلای قاینات</label>
  <label className="slick-slide-label-2">زرشک پفکی و دانه اناری قاینات</label>
  <button className = 'btn'><Link style = {{color : 'black',textDecoration:'none'}} to = '/فروشگاه-شادناک ' >
      خرید آنلاین
      </Link>
  </button>
  </div>
  <div className="slick-slide">
  <img className="slick-slide-image" src={three} alt = 'زعفران سرگل شادناک' />
  <label className="slick-slide-label">زعفران سرگل شادناک</label>
  <label className="slick-slide-label-2">زعفران شادناک محصولی از قاینات است که بدون واسطه بدست شما میرسد</label>
  <button className = 'btn'><Link style = {{color : 'black',textDecoration:'none'}} to = '/فروشگاه-شادناک ' >
      خرید آنلاین
     </Link>
  </button>
  </div>   
         
 </Slider>  
    </div>                      

 )}
export default SlideShow
