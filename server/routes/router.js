import express from 'express'
import {firstpage} from '../controllers/get.js'
import {createcomment,findcomments,comments} from '../controllers/post.js'
const router = express.Router()
router.get('/',firstpage)
router.post('/',createcomment)
router.post('/comments/:name',findcomments)
router.get('/comments',comments)
export default router