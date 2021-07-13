import express from 'express'
import {firstpage} from '../controllers/get.js'
import {createcomment,comments} from '../controllers/post.js'
const router = express.Router()
router.get('/',firstpage)
router.post('/',createcomment)
router.post('/:name',comments)
export default router