/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {

     return(
        <footer className = 'footer'>
        <div className = 'footersitems' id = 'footeritem1'>
        <p>
           ددساعات پشتیبانی فروشگاه اینترنتی شادناک
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
        <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=204635&amp;Code=LKIQIYX8G2IPpD3NV2dz">
        <img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=204635&amp;Code=LKIQIYX8G2IPpD3NV2dz" alt=
        "" style={{cursor:"pointer"}} id="LKIQIYX8G2IPpD3NV2dz" />
        </a>  {/*some promblem here..*/}
        <img id = 'nbqenbqewlaonbqeapfunbqe' style = {{coursor:'pointer'}} alt=
        '' src = 'https://logo.samandehi.ir/logo.aspx?id=224252&p=odrfodrfshwlodrfujy' />
        </div>
        <div className = 'footersitems' id = 'footeritem3'>
        <p style = {{fontSize : '1.2vmax'}}>
        در خبرنامه عضو شوید تا از تخفیف های ویژه و محصولات جدید مطلع شوید
        </p>
        <input type = 'email' placeholder = 'ایمیل خود را بنویسید'></input>
        <br />
        <button type="submit" >ثبت نام </button>
        
        </div>
        <div className = 'footersitems' id = 'footeritem4'>
            <p style = {{fontSize : '1.2vmax'}}>درباره خرید کردن راهنمایی میخوای؟</p>
            <Link to = '/راهنمای-خرید' style = {{textDecoration:'none',color:'#e1bb23'  , fontSize: '1.2vmax' ,cursor:'pointer'}} > 
            برو به صفحه راهنمای خرید
            </Link>
        </div>
        <div className = 'footersitems' id = 'footeritem5'>5</div>
        </footer>
     )
}

export default Footer
