import { useState } from "react"
import { getToken, getUserData } from "../auth/localStorage"
import { Navigate } from "react-router-dom"
import { useEffect } from "react"

export const SecureRoute = (props) => {

    const [isAdmin,setAdmin]= useState(false)
    const token = getToken

    const permission = () =>{
        if(token){
          let permissions = getUserData()
         if (permissions.permissions === 'admin') {
          setAdmin(true) 
         }
         
        }
       } 
       const display =  () => {

        try {
          
        if (!isAdmin) {
          return <Navigate to='home'></Navigate>
        }
        
        } catch (error) {
           console.log(error);  
        }
  
  }

       useEffect( ()=>{
        permission()
        display()

    
    },[isAdmin])

    return props.children;
}