import { useState } from "react"
import { getToken, getUserData } from "../auth/localStorage"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export const SecureRoute = (props) => {

    const [isAdmin,setAdmin]= useState(false)
    
    const token = getToken()
    const userData = getUserData()  
    const nav = useNavigate()
    const getUser =(data)=>{
    let user = data
    return user
    }

    
    const display = async () => {

          if (!token) {
              
            nav('/home')
          }
          else{
            await getUser(userData)
            
            if (userData.permissions !== 'admin') {
                setAdmin(true)
                nav('/home') 
            }
          }
  
  }
useEffect(()=>{
display()
},[isAdmin])
  
  return props.children;

}