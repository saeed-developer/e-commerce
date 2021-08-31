import React from 'react'
import ProductSection from './productSection';
import CommentSection from './commentSection';
import Header from './../firstpage/header.js'
import './styles.css';
const ProductPage = ({id}) => {
    return (
        <>
      <Header logosize = {'20%'} breakwidth = {'55%'} />
      <ProductSection id =  {id}/ >
      <CommentSection id = {id} />
       </>
    )
}

export default ProductPage
