

export const Answer = (props)=>{

    return(
        <div>
           {props.children} <input type="text" onChange={props.setAnswer}/>
        </div>
    )
}