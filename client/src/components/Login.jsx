import { useState } from 'react';
import axios from "axios";
import '../componentStyle/login.css'
import { storeToken, storeUserData } from '../auth/localStorage';

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

    const handelSubmit = ()=>{
        axios.post(`http://localhost:4000/users/login`,userData).then(data =>{
         
         storeToken(data.data.data[0])
         storeUserData(data.data.data[1])
         props.handleLoginModal()
         props.setLogin(true)
        }).catch(err =>{  
         setError(err.response.data.message)
        })
     }

     const renderError = error.map(err =>{
        return(
            <h3>
                {err}
            </h3>
        )
    })
   

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
                    {error && <h3>{renderError}</h3>}
                </div>
            </div>
            

        </div>
    )
}