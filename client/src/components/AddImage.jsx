

export const AddImage = (props) =>{
    

    const handleImage = (e) => {
        props.setImage(e.target.value)
    }
    

    return(
        <div className="images">
            <label>{props.children}</label>
            <div> <input type="file" onChange={handleImage}/></div>
           
        </div>
    )
}