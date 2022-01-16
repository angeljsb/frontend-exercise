import React from "react";
import "./style.css";

const TextInput = (props = {}) => {
  const { type, resize, className, ...otherProps } = props;

  const parentClass = className || "";
  const realType = type || "text";
  const realResize = resize || "both";

  return realType === "textarea" ? (
    <textarea
      className={`text-input text-input--textarea text-input--resize-${realResize} ${parentClass}`}
      {...otherProps}
    ></textarea>
  ) : (
    <input
      className={`text-input text-input--input ${parentClass}`}
      type={realType}
      {...otherProps}
    ></input>
  );
};

export default TextInput;
