import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import "./style.css";

const Presentation = (props = {}) => {
  const { className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <div className={`presentation ${parentClass}`} {...otherProps}>
      <div className="presentation__container">
        <Title className="presentation__title" size="large">
          Next generation digital banking
        </Title>
      </div>
      <div className="presentation__container">
        <Text className="presentation__text" size="large">
          Take your financial life online. Your Easybank accountwill be a
          one-stop-shop for spending, saving. budgeting, nvesting, and much
          more.
        </Text>
      </div>
      <div className="presentation__container">
        <Button className="presentation__button" color="primary">
          Request Invite
        </Button>
      </div>
    </div>
  );
};

export default Presentation;
