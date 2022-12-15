

export const AddField = (props) =>{
    const handleChange = (e) =>{
        props.setFieldName(e.target.value)
    }

    return(
        <div>
        <input type="text" placeholder="Field Name" onChange={handleChange}/>
        <button>Add</button>
    </div>  
    )
}