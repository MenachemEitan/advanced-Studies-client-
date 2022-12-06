import { useState } from "react"
import axios from "axios";
// import { postSignUp } from "../axios"

import '../componentStyle/signUp.css'

export const SignUp = (props) => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [error, setError] = useState()
    const [data, setData] = useState()

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputUserName = (e) => {
        setUserName(e.target.value);
    }
    const inputPassword = (e) => {
        setPassword(e.target.value);
    }
    const inputFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const inputLastName = (e) => {
        setLastName(e.target.value);
    }

    const userData = {
        firstName,
        lastName,
        email,
        password,
        userName
    }

    const handelSubmit = ()=>{
       axios.post(`http://localhost:4000/users/signup`,userData).then(data =>{
        console.log(data);
        // props.handleModal()
       }).catch(err =>{
        // console.log(err.response.data.message);
        setError(err.response.data.message)
       })
       console.log(error);
        
    }
    const renderError = error.map(err =>{
        return(
            <h3>
                {err}
            </h3>
        )
    })

    return (
        <div className="signUpModal">
            <div className='signUpContent'>
                <div className='signUpTitle'>
                    <h3>Sign Up</h3>
                </div>
                <div className='signUpInputs'>
                    <input type="text" placeholder="Email" onChange={inputEmail} />
                    <input type="text" placeholder="First name" onChange={inputFirstName} />
                    <input type="text" placeholder="Last name" onChange={inputLastName} />
                    <input type="text" placeholder="Password" onChange={inputPassword} />
                    <input type="text" placeholder="User Name" onChange={inputUserName} />

                </div>
                <div className='signUpButtons'>
                    <button onClick={handelSubmit}>Submit</button>
                    <button onClick={props.handleModal}>close</button>
                </div>
                <div className="errorUser">
                    {error && <h3>{renderError}</h3>}
                </div>
            </div>


        </div>
    )
}