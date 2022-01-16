import React from "react";
import "./style.css";

const TextInput = (props = {}) => {
  const { type, resize, danger, className, ...otherProps } = props;

  const parentClass = className || "";
  const realType = type || "text";
  const realResize = resize || "both";
  const dangerClass = danger ? "text-input--danger" : "text-input--success";

  return realType === "textarea" ? (
    <textarea
      className={`text-input text-input--textarea ${dangerClass} text-input--resize-${realResize} ${parentClass}`}
      {...otherProps}
    ></textarea>
  ) : (
    <input
      className={`text-input text-input--input ${dangerClass} ${parentClass}`}
      type={realType}
      {...otherProps}
    ></input>
  );
};

export default TextInput;
