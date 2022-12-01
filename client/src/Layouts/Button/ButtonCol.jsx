// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Icon from "../Icon/Icon";
// import "./Button.css";
// const ButtonCol = ({ link = ["/home"], icon, onClick, text, style }) => {
//   const [pressed, setPressed] = useState(true);
//   const color = pressed ? "light-gray" : "blue";
//   const handleClick = () => {
//     onClick();
//     setPressed(!pressed);
//   };
//   return (
//     <div className={`btn-col  ${color} row between`} onClick={handleClick}>
//       <Link to={link} style={style} className={"btn-link row"}>
//         <Icon Icon={icon} />
//         <h6>{text}</h6>
//       </Link>
//       <h6>{6}</h6>
//     </div>
//   );
// };

// export default ButtonCol;
