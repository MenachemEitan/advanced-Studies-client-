import { useState } from 'react';
import axios from "axios";
import '../componentStyle/login.css'
import { storeToken, storeUserData } from '../auth/localStorage';
import { PostAuth,} from '../axios';

export const Login = (props) => {
// console.log(props);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [error, setError] = useState([])

    const inputUserName = (e)=>{
        setEmail(e.target.value);  
    }
    const inputPassword = (e)=>{
        setPassword(e.target.value);  
    }

    const userData = {
        email,
        password   
    }

    const handelSubmit = async ()=>{
       const post = await PostAuth('users/login',userData)
        // console.log(post,'post error');
        if (post.length != 0) {
            setError(post)
        }
        else{
            
          props.handleLoginModal()
         props.setLogin(true) 

        }
     }

    //  const renderError = error.map(err =>{
        
    //     return(
    //         <h3>
    //             {err}
    //         </h3>
    //     )
    // })
    const renderError  = ()=>{
        const returnValue = []
        
        if (error.length != 0) {

          error.map(err =>{
        returnValue.push(
            <h3>
                {err}
            </h3>
        )
    })  
    return returnValue
        }
        else{
            return
        }
    } 
   

    return (
        <div className="loginModal">
            <div className='loginContent'>
                <div className='loginTitle'>
                    <h3>Login</h3>
                </div>
                <div className='loginInputs'>
                    <input type="text" placeholder="Email" onChange={inputUserName} />
                    <input type="text" placeholder="Password" onChange={inputPassword} />
                </div>
                <div className='loginButtons'>
                    <button onClick={handelSubmit}>Submit</button>
                    <button onClick={props.handleLoginModal}>close</button>
                </div>
                <div className="errorUser">
                    {/* {<h3>{renderError()}</h3>} */}
                    
                    {renderError()}
                </div>
            </div>
            

        </div>
    )
}