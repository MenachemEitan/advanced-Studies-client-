

export const AddClass = (props) => {
    const handleClass = (e) => {
        props.setClassName(e.target.value)
    }
    

    return (
        <div>
            <input type="text" placeholder="class" onChange={handleClass} />
            <button>Add</button>
        </div>
    )
}