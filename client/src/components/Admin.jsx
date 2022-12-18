import { useState } from "react";
import { AddClass } from "./AddClass";
import { AddField } from "./AddField";
import { AddQuestions } from "./AddQuestions";
import Section from "../Layouts/section/Section";

export const Admin = () => {
  const [select, setSelect] = useState("");
  const getSelect = (e) => {
    setSelect(e.target.value);
  };
  const [fieldName, setFieldName] = useState("");
  const [className, setClassName] = useState("");
  const [questions, setQuestions] = useState("");
  const [classText, setClassText] = useState("");
  // console.log(select);
  // console.log(fieldName,'fieldName');
  // console.log(className,'className');
  // console.log(questions,);

  return (
    <div className="row page-top-pad-admin">
      <div className="admin-page">
        <div className="row between">
          <h2 className="pad">Add Page</h2>

          <div className="pad">
            <select onChange={getSelect}>
              <option value="default" hidden>
                Choose Type
              </option>
              <option value="field">Field</option>
              <option value="class">Class</option>
              <option value="questions">Questions</option>
            </select>
          </div>
          <div style={{ width: "100px" }}></div>
        </div>

        {select === "field" && (
          <>
            <div className="col left">
              <h4 className="pad">Add new field</h4>
            </div>
            <AddField
              setFieldName={setFieldName}
              fieldName={fieldName}
              select={select}
            />
          </>
        )}
        {select === "class" && (
          <div>
            <h4 className="pad">Add new class</h4>
            <AddField setFieldName={setFieldName} fieldName={fieldName} />
            <AddClass
              setClassName={setClassName}
              className={className}
              fieldName={fieldName}
              select={select}
            />
          </div>
        )}
        {select === "questions" && (
          <div>
            <AddClass setClassName={setClassName} />
            <AddQuestions
              setQuestions={setQuestions}
              question={questions}
              className={className}
            />
          </div>
        )}
      </div>
    </div>
  );
};
