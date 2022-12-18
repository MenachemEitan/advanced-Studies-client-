export const Answer = (props) => {
  return (
    <div>
      {props.children}{" "}
      <input type="text" onChange={props.setAnswer} style={{ width: "100%" }} />
    </div>
  );
};
