import express from 'express'
import {firstpage} from '../controllers/get.js'
import {createcomment,findcomments,comments} from '../controllers/post.js'
import { createProduct } from '../controllers/productPost.js'
import { getProduct, getProductImage } from '../controllers/productGet.js'
const router = express.Router()
router.get('/',firstpage)
router.post('/',createcomment)
router.post('/comments',findcomments)
router.get('/comments',comments)
router.post('/createproduct',createProduct)//forproduct
router.get('/getproduct',getProduct)
router.get('/productimage',getProductImage)
export default router