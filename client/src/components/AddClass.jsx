import { useState } from "react";
import { PostClass } from "../axios";
import { AddIcon } from "./AddIcon";
import { AddImage } from "./AddImage";

export const AddClass = (props) => {
  const [message, setMessage] = useState([]);
  const [classText, setClassText] = useState("");
  const [icon, setIcon] = useState();
  const [image, setImage] = useState();

  const handleClass = (e) => {
    props.setClassName(e.target.value);
  };

  const handleText = (e) => {
    setClassText(e.target.value);
  };

  const saveClass = async () => {
    let data = {
      className: props.className,
      classText: classText,
    };

    const postClass = await PostClass(
      "addclass",
      props.fieldName,
      data,
      image,
      icon
    );
    if (postClass.length != 0) {
      setMessage(postClass);
    } else {
      setMessage("Success");
    }
  };

  return (
    <div className="">
      <div className="pad">
        <input type="text" placeholder="class" onChange={handleClass} />
      </div>
      <div className="pad">
        {props.select == "class" && (
          <textarea type="text" placeholder="text" onChange={handleText} />
        )}
      </div>
      <div className="pad">
        {props.select == "class" && (
          <AddIcon setIcon={setIcon}>upload icon</AddIcon>
        )}
        {props.select == "class" && (
          <AddImage setImage={setImage}>upload Image</AddImage>
        )}
      </div>
      <div className="row right pad">
        {props.select == "class" && (
          <button className="btn black" onClick={saveClass}>
            Add
          </button>
        )}
        {message && <h4>{message}</h4>}
      </div>
    </div>
  );
};
