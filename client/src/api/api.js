import axios from 'axios';
const client = axios.create({
   baseURL: 'http://localhost:3000'
})

const Api = 
 async function getApi() {
     try {
   const data = await client.get("/")
   console.log(data.data)
}
catch(err){
    console.log(err)
}

}
Api()

export default Api



