
export const AddIcon = (props) =>{
    

    const handleIcon = (e) => {
        props.setIcon(e.target.value)
    }
    

    return(
        <div className="images">
            <label>{props.children}</label>
            <div> <input type="file" onChange={handleIcon}/></div>
           
        </div>
    )
}