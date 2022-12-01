import React from "react";

const Input = ({ onChange, placeholder, type = ["text"] }) => {
  return (
    <input
      className="singup-input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
