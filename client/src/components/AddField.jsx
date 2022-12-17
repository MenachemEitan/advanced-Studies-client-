import { useState } from "react";
import { PostField } from "../axios";

export const AddField = (props) => {
  const [error, setError] = useState([]);

  const handleField = (e) => {
    props.setFieldName(e.target.value);
  };

  const saveField = async () => {
    let data = {
      fieldName: props.fieldName,
    };

    const postField = await PostField("/addfield", data);
    if (postField.length != 0) {
      setError(postField);
    } else {
      setError([]);
    }
  };

  return (
    <div className="col">
      <input type="text" placeholder="Field Name" onChange={handleField} />
      {props.select == "field" && (
        <button onClick={saveField} className="btn black">
          Add
        </button>
      )}
      {error && <h5>{error}</h5>}
    </div>
  );
};
