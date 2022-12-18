export const AddImage = (props) => {
  const handleImage = (e) => {
    props.setImage(e.target.files[0]);
  };

  return (
    <div className="images">
      <label>{props.children}</label>
      <div>
        {" "}
        <input type="file" onChange={handleImage} className="input-file" />
      </div>
    </div>
  );
};
