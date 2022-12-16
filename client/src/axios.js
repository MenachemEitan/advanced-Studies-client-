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
export const PostQuestions =async (url,params,data)=>{
    
   await axios.post(`${baseUrl}/class/${url}:${params}`,data).then(data =>{
        console.log(data);
        
       }).catch(err =>{  
        
        console.log(err);
       })
       
}
export const PostField =async (url,data)=>{
    
    const returnValue = []
    
    await axios.post(`${baseUrl}/class/${url}`,data).then(data =>{
         console.log(data);
         
        }).catch(err =>{  
            
            returnValue.push(...err.response.data.message)
        })
        return returnValue
 }

 export const PostClass =async (url,params,data)=>{
    
    const returnValue = []
    await axios.post(`${baseUrl}/class/${url}/${params}`,data).then(data =>{
         console.log(data);
         
        }).catch(err =>{ 
            console.log(err);
            returnValue.push(err.response.data.message)
            console.log(returnValue); 
        })
        return returnValue
 }