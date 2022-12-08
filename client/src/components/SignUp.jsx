import { useState } from "react"
import axios from "axios";

import '../componentStyle/signUp.css'
import { storeToken, storeUserData } from "../auth/localStorage";
import { PostAuth } from "../axios";

export const SignUp = (props) => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [error, setError] = useState([])


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

    const handelSubmit = async () => {
        const post = await PostAuth(`users/signup`, userData)

        if (post.length != 0) {
            setError(post)
        }
        else {
            props.handleModal()
            props.setLogin(true)
        }
    }

    const renderError = () => {
        const returnValue = []

        if (error.length != 0) {

            error.map(err => {
                returnValue.push(
                    <h3>
                        {err}
                    </h3>
                )
            })
            return returnValue
        }
        else {
            return
        }
    }

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
                {renderError()}
                </div>
            </div>

        </div>
    )
}