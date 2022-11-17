import React from "react";

const Button = ({ text, variant, handleClick }) => {
  return (
    <button onClick={handleClick} className={`btn btn-${variant || "primary"}`}>
      {text || "Default"}
    </button>
  );
};

export default Button;
