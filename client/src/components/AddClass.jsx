import { useState } from "react"
import { PostClass } from "../axios"
import { AddIcon } from "./AddIcon"
import { AddImage } from "./AddImage"


export const AddClass = (props) => {

    // console.log(props.fieldName);
    // console.log(props.className);
    const [message, setMessage] = useState([])
    
    const [icon, setIcon] = useState()
    const [image, setImage] = useState()

    // console.log(icon);
    // console.log(image);

    const handleClass = (e) => {
        props.setClassName(e.target.value)
    }
    
 
    const saveClass = async () => {
        let data = {
            "className": props.className,
        }
        
        const postClass = await PostClass('addclass',props.fieldName,data)
        if (postClass.length != 0) {
            setMessage(postClass)
            console.log(postClass);
        }
        else{
            setMessage('Success')
        }
    }
    
    return (
        <div>
            <input type="text" placeholder="class" onChange={handleClass} />
            
            
            <AddIcon setIcon={setIcon}>upload icon</AddIcon>
            <AddImage setImage={setImage}>upload Image</AddImage>
            
            {props.select == 'class' && <button onClick={saveClass}>Add</button>}
            {message && <h4>{message}</h4>}
        </div>
    )
}