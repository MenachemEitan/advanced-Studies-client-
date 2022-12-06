import { useState } from "react"
import '../componentStyle/signUp.css'

export const SignUp = (props) => {

    const [email,setEmail]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [repeatPassword,setRepeatPassword]=useState('')

    const inputEmail = (e)=>{
        setEmail(e.target.value);  
    }
    const inputUserName = (e)=>{
        setUserName(e.target.value);  
    }
    const inputPassword = (e)=>{
        setPassword(e.target.value);  
    }
    const inputRepeatPassword = (e)=>{
        setRepeatPassword(e.target.value);  
    }

    return (
        <div className="signUpModal">
            <div className='signUpContent'>
                <div className='signUpTitle'>
                    <h3>Sign Up</h3>
                </div>
                <div className='signUpInputs'>
                    <input type="text" placeholder="email" onChange={inputEmail}/>
                    <input type="text" placeholder="User Name" onChange={inputUserName} />
                    <input type="text" placeholder="Password" onChange={inputPassword} />
                    <input type="text" placeholder="Repeat Password" onChange={inputRepeatPassword} />
                </div>
                <div className='signUpButtons'>
                    <button>Submit</button>
                    <button onClick={props.handleModal}>close</button>
                </div>
            </div>


        </div>
    )
}