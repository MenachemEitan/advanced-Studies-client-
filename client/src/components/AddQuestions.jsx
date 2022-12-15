
import { PostQuestions } from "../axios"


export const AddQuestions = (props) => {

    const handleQuestions = (e) => {
        props.setQuestions(e.target.value)
    }


    const saveQuestions = () =>{
        let data = [props.questions,]
        PostQuestions('addquestion',props.className,)
    }
    

    return (
        <div>
            <h3>Add new questions </h3>
                <textarea name="questions" cols="30" rows="10" onChange={handleQuestions}></textarea>
                <button >Add</button>
        </div>
    )
}