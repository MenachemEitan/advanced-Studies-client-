import axios from "axios";

const baseUrl = 'http://localhost:4000'

export const postSignUp = async (url,data) =>{
   return new Promise((res,rej) =>{
     axios.post(`${baseUrl}${url}`,data).then(data => {
        console.log(data);
        res(data)
    })
    // .catch((resp)=>{
    //     console.log('error');
    //     rej(resp.response.data)
        
    // })
   })
}