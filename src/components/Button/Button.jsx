import React from "react";

export default function Button({
  text = "Button",
  onClick
}) {
  return <div onClick={onClick}>{text}</div>;
}
