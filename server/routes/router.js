import express from 'express'
import {createcomment} from '../controllers/commentPost.js'
import {findcomments} from '../controllers/commentGet.js'
import { createProduct } from '../controllers/productPost.js'
import { getProduct, getProductImage } from '../controllers/productGet.js'
import { createUrl } from '../controllers/urlPost.js'
import { getUrl } from '../controllers/urlGet.js'
import { commentValidator } from '../validator/inputValidator.js'
const router = express.Router()
router.post('/comment',commentValidator,createcomment)
router.get('/comments',findcomments)
router.post('/create-product',createProduct)//forproduct
router.get('/products',getProduct)
router.get('/product-image',getProductImage)
router.post('/create-url',createUrl)
router.get('/get-url',getUrl)
export default router