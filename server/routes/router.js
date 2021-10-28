import express from 'express'
import {createcomment} from '../controllers/commentPost.js'
import {findcomments} from '../controllers/commentGet.js'
import { createProduct } from '../controllers/productPost.js'
import { getProduct, getProductImage } from '../controllers/productGet.js'
import { createUrl } from '../controllers/urlPost.js'
import { getUrl } from '../controllers/urlGet.js'
import { commentValidator , discountCodeValidator,userValidator } from '../validator/inputValidator.js'
import { discountCode } from '../controllers/discountCodePost.js'
import { postCities } from '../controllers/citiesPost.js'
import { getCities } from '../controllers/citiesGet.js'
import {postOrder} from '../controllers/orderPost.js'
import { postContent } from '../controllers/contentPost.js'
import { getContent } from '../controllers/contentGet.js'
import { login , logedIn } from '../controllers/loginPost.js'
import signUp from '../controllers/signupPost.js'
import ratelimit from 'express-rate-limit'

const limiter = ratelimit({
    windowMs: 5 * 60 * 1000, 
    max:  20 ,
    message:'درخواست زیادی از آی پی شما ارسال شده است! چند دقیقه دیگر دوباره امتحان کنید'
  });
const router = express.Router()
router.post('/comment',commentValidator,createcomment)
router.get('/comments',findcomments)
router.post('/create-product',createProduct)//forproduct
router.get('/products',getProduct)
router.get('/product-image',getProductImage)
router.post('/create-url',createUrl)
router.get('/get-url',getUrl)
router.post('/discount-code',discountCodeValidator,limiter,discountCode)
router.post('/post-cities',postCities)
router.get('/get-cities', getCities)
router.post('/post-order',postOrder)
router.post('/post-content',postContent)
router.get('/get-content',getContent)
router.post('/post-signup',userValidator,signUp)
router.post('/post-login',login)
router.post('/loged-in',logedIn)
export default router