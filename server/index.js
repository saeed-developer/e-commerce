import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/router.js'
import { config } from 'dotenv' 
config()
const app = express()
app.use(express.urlencoded({limit : '10Mb' , extended : true}))
app.use (express.json({limit : '10Mb' , extended : true}))
app.use(cors())
app.use('/',router)
const database_connection = 'mongodb+srv://shadnak:Zanf7IvO6szjGarn@cluster0.irw49.mongodb.net/Cluster0?retryWrites=true&w=majority'
const DB = process.env.DB
const Port = process.env.PORT || 3000
mongoose.connect(DB, {useNewUrlParser : true , useUnifiedTopology : true})
.then(()=> app.listen(Port , console.log(`connected to database and server is listening on port ${Port}`)))
.catch((err)=> console.log(err.message))
mongoose.set('useFindAndModify',false)