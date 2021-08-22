import axios from 'axios';
const client = axios.create({
   baseURL: process.env.REACT_APP_URL
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



