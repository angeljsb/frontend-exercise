import React from "react";
import Text from "../../atoms/Text";
import CardTitle from "../../atoms/CardTitle";
import "./style.css";

const ChooseReason = (props = {}) => {
  const { reason, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <div className={`choose-reason ${parentClass}`} {...otherProps}>
      <div className="choose-reason__icon">
        <img className="choose-reason__icon" src={reason.icon} alt="icon"></img>
      </div>
      <div className="choose-reason__title">
        <CardTitle size="medium">{reason.title}</CardTitle>
      </div>
      <div className="choose-reason__text">
        <Text size="small">{reason.text}</Text>
      </div>
    </div>
  );
};

export default ChooseReason;
