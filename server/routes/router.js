import express from 'express'
import {createcomment} from '../controllers/commentPost.js'
import {findcomments} from '../controllers/commentGet.js'
import { createProduct } from '../controllers/productPost.js'
import { getProduct, getProductImage } from '../controllers/productGet.js'
const router = express.Router()
router.post('/comment',createcomment)
router.get('/comments',findcomments)
router.post('/createproduct',createProduct)//forproduct
router.get('/getproduct',getProduct)
router.get('/productimage',getProductImage)
export default router