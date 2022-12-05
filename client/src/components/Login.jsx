import '../componentStyle/login.css'

export const Login = (props) => {

    return (
        <div className="loginModal">
            <div className='loginContent'>
                <div className='loginTitle'>
                    <h3>Login</h3>
                </div>
                <div className='loginInputs'>
                    <input type="text" placeholder="UserName" />
                    <input type="text" placeholder="Password" />
                </div>
                <div className='loginButtons'>
                    <button>Submit</button>
                    <button onClick={props.handleModal}>close</button>
                </div>
            </div>


        </div>
    )
}