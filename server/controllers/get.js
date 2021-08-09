import express from 'express'
import { readFileSync } from 'fs'
export const firstpage = async(req,res)=>{
    
    const{name} = req.query
    
    console.log(name)

    await  res.sendFile(`/shadnak/server/images/shop-page/${name}`)
    }    
