import { useState } from 'react';
import '../componentStyle/login.css'

export const Login = (props) => {

    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const inputUserName = (e)=>{
        setUserName(e.target.value);  
    }
    const inputPassword = (e)=>{
        setPassword(e.target.value);  
    }

    return (
        <div className="loginModal">
            <div className='loginContent'>
                <div className='loginTitle'>
                    <h3>Login</h3>
                </div>
                <div className='loginInputs'>
                    <input type="text" placeholder="User Name" onChange={inputUserName} />
                    <input type="text" placeholder="Password" onChange={inputPassword} />
                </div>
                <div className='loginButtons'>
                    <button>Submit</button>
                    <button onClick={props.handleModal}>close</button>
                </div>
            </div>


        </div>
    )
}