import { useState } from "react"
import { AddClass } from "./AddClass"
import { AddField } from "./AddField"
import { AddQuestions } from "./AddQuestions"


export const Admin = () => {
    const [select, setSelect] = useState('')
    const getSelect = (e) => {
        setSelect(e.target.value);
    }
    const [fieldName, setFieldName] = useState('')
    const [className, setClassName] = useState('')
    const [questions, setQuestions] = useState('')
    // console.log(select);
    // console.log(fieldName,'fieldName');
    // console.log(className,'className');
    // console.log(questions,);
    
    
    return (
        <div>
            <div>
                <h2>Add Page</h2>
                <select onChange={getSelect}>
                    <option value="default" hidden>Choose Type</option>
                    <option value="field" >Field</option>
                    <option value="class" >Class</option>
                    <option value="questions" >Questions</option>
                </select>
            </div>
            {select === 'field' && <div>
                <h4>Add new field</h4>
                <AddField setFieldName={setFieldName} fieldName={fieldName} select={select} />
            </div>}
            {select === 'class' && <div>
                <h4>Add new class</h4>
                <AddField setFieldName={setFieldName} fieldName={fieldName} />
               <AddClass setClassName={setClassName} className={className} fieldName={fieldName} select={select}/>
            </div>}
            {select === 'questions' && <div>
            <AddClass setClassName={setClassName}/>
            <AddQuestions setQuestions={setQuestions} questions={questions} className={className}/>
            </div>}
            
        </div>
    )
} 