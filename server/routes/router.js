import express from 'express'
import {firstpage} from '../controllers/get.js'
import {comments} from '../controllers/post.js'
const router = express.Router()
router.get('/',firstpage)
router.post('/',comments)
export default router