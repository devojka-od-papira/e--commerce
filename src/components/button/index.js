import React from "react";
import "../button/style.scss";

function Button({ textName, variant }) {
  if (variant === "standard") {
    return <button className="standard">{textName}</button>;
  }
  return (
    <div>
      <button className="style">{textName}</button>
    </div>
  );
}
export default Button;
