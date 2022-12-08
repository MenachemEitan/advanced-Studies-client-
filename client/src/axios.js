import axios from "axios";
import { storeToken, storeUserData } from "./auth/localStorage";

const baseUrl = 'http://localhost:4000'

export const PostAuth =async (url,data)=>{
    const returnValue = []
   await axios.post(`${baseUrl}/${url}`,data).then(data =>{
        storeToken(data.data.data[0])
        storeUserData(data.data.data[1])
        
       }).catch(err =>{  
        returnValue.push(...err.response.data.message)
       })
       return returnValue
}