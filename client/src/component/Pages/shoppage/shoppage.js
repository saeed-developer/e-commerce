import React from 'react'
import Header from '../firstpage/header'
import { useGetproductQuery } from '../../../services/shadnakapi'
const ShopPage = ()=>{
  useGetproductQuery('all')
    return (
        <>
      <Header logosize = {'20%'} breakwidth = {'55%'} />
      <img src =  'http://localhost:3000/productimage?id=anari.png' alt = 'anari' / > 
        </>
    )
}

export default ShopPage