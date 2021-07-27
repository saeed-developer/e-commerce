/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {Link} from 'react-router-dom'
import Instagram from './../../../images/instagram.svg'
const Footer = () => {

     return(
        <footer className = 'footer'>
        <div className = 'footersitems' id = 'footeritem1'>
        <p>
           ساعات پشتیبانی فروشگاه اینترنتی شادناک
           <br />
            همه روزه از ساعت ۸ صبح تا ۲۰ شب 
            <br />
            شماره تماس پشتیبانی : <a href = 'tel:۰۹۱۵۲۶۴۰۵۳۷' style = {{textDecoration:'none' , color:'#e1bb23' }}> ۰۹۱۵۲۶۴۰۵۳۷</a>
            <br />
            ایمیل پشتیبانی: <a href="mailto:shadnakshop@gmail.com" style = {{textDecoration:'none' , color : '#e1bb23' }}>shadnakshop@gmail.com</a>
            <br />
            آدرس:خراسان جنوبی،قائن خیابان امام،کوچه کشاورز،پلاک ۳۸
        </p>
        </div>
        <div className = 'footersitems' id = 'footeritem2'>
        {/*<a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=204635&amp;Code=LKIQIYX8G2IPpD3NV2dz">
        <img referrerPolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=204635&amp;Code=LKIQIYX8G2IPpD3NV2dz" alt=
        "" style={{cursor:"pointer"}} id="LKIQIYX8G2IPpD3NV2dz" />
        </a>  
        <img id = 'nbqenbqewlaonbqeapfunbqe' style = {{coursor:'pointer'}} alt=
        '' src = 'https://logo.samandehi.ir/logo.aspx?id=224252&p=odrfodrfshwlodrfujy' />*/}
          <a href = 'https://www.instagram.com/saffron_shadnak/'><img  src ={Instagram} alt = 'instaicon'/></a>
          <p>
          شادناک را در اینستاگرام دنبال کنید 
          </p>
        </div> 
        <div className = 'footersitems' id = 'footeritem3'>
        <p>
        در خبرنامه عضو شوید تا از تخفیف های ویژه و محصولات جدید مطلع شوید
        </p>
        <input  type = 'email' placeholder = 'ایمیل خود را بنویسید'></input>
        <br />
        <button className = 'footerbtn' type="submit" >ثبت نام </button>
        </div>
        <div className = 'footersitems' id = 'footeritem4'>
            <p >درباره خرید کردن راهنمایی میخوای؟</p>
            <Link to = '/راهنمای-خرید'  > 
            برو به صفحه راهنمای خرید
            </Link>
        </div>
        <div className = 'footersitems' id = 'footeritem5'>
            <hr></hr>
            <small>&copy;2021 shadnak</small>
            <p> کلیه حقوق این وبسایت برای شادناک محفوظ است</p>
        </div>
        </footer>
     )
}

export default Footer
