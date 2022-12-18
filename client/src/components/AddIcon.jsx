export const AddIcon = (props) => {
  const handleIcon = (e) => {
    props.setIcon(e.target.files[0]);
  };

  return (
    <div className="images">
      <label>{props.children}</label>
      <div>
        {" "}
        <input type="file" onChange={handleIcon} />
      </div>
    </div>
  );
};
