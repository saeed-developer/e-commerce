import express ,{ urlencoded } from 'express'
import {app} from './app.js'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/router.js'
import { config } from 'dotenv' 
import {urlCreator} from './scripts/urlCreator.js'
import {subscribers} from './subscribers/subscriber.js'
config({path: './config/.env'})
app.use(express.urlencoded({limit : '1Mb' , extended : true}))
app.use (express.json({limit : '1Mb' , extended : true}))
app.use(cors())
app.use('/',router)
app.set('firstReq',true)
const DB = process.env.DB 
const Port = process.env.PORT || 3000
mongoose.connect(DB, {useNewUrlParser : true , useUnifiedTopology : true})
.then(()=> app.listen(Port ,
    subscribers,
    urlCreator(), 
    console.log(`connected to database and server is listening on port ${Port}`)))
.catch((err)=> console.log(err.message))
mongoose.set('useFindAndModify',false)
