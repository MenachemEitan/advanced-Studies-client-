import { useState } from "react"
import { createPortal } from "react-dom"
import { SignUp } from "../components/SignUp"

export const SignUpModal = (props) => {

    const [isModal, setModal] = useState(false)

    const handleClick = () => {
        setModal(!isModal)
    }

    const Modal = () => createPortal(<SignUp handleModal={handleClick}/>, document.getElementById('modal'))


    return (
        <div>
            <button onClick={handleClick}>{props.children}</button>
            {isModal && <Modal />}
        </div>
    )
}