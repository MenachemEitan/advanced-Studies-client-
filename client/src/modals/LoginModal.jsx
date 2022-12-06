import { useState } from "react"
import { createPortal } from "react-dom"
import { Login } from "../components/Login"


export const LoginModal = (props) => {

    const [isModal, setModal] = useState(false)

    const handleClick = () => {
        setModal(!isModal)
    }

    const Modal = () => createPortal(<Login handleLoginModal={handleClick}/>, document.getElementById('modal'))


    return (
        <div>
            <button onClick={handleClick}>{props.children}</button>
            {isModal && <Modal />}
        </div>
    )
}