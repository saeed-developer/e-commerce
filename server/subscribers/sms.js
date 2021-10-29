import event from 'events'
import axios from 'axios'
import {writeFile} from 'fs'
export const newOrder = new event()
newOrder.on('newOrder', (order)=>{
    writeFile('./records/smsRecord.txt',`\nsmsSent`,{flag : 'a'},(err)=>{
        if (err)console.error(err)
    })
    axios.post(process.env.smsUrl,{
        op : "send",
        uname : process.env.smsUsername,
        pass:  process.env.smsPassword,
        message : `سفارش جدید دارید
        مبلغ :${order.total}`,
        from: process.env.smsFrom,
        to : [process.env.smsTo],
    })
    .then(()=>  writeFile('smsRecord.txt',`\nsmsSent`,{flag : 'a'},(err)=>{
       if(err) console.error(err)
    }) , () =>  writeFile('smsRecord.txt',`\nsmsNotsent`,{flag : 'a'},(err)=>{
        if(err) console.error(err)}))
})
