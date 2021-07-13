import React from 'react'
import {Link} from 'react-router-dom'
//import FetchData from './../../../api.js'
const Header = ()=>{
    return (
        <>
        <h2> خوش آمدید </h2>
        <Link  to = '/shop' > 
        فروشگاه آنلاین
        </Link>
        </>
    )
}
export default Header