import React from "react";
import Container from "../../atoms/Container";
import TextInput from "../../atoms/TextInput";
import "./style.css";

const LabeledTextInput = (props = {}) => {
  const { id, label, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <Container className={`labeled-text-input ${parentClass}`}>
      <Container className="labeled-text-input__container">
        <label className="labeled-text-input__label" htmlFor={id}>
          {label}
        </label>
      </Container>
      <Container className="labeled-text-input__container">
        <TextInput
          className="labeled-text-input__input"
          id={id}
          {...otherProps}
        ></TextInput>
      </Container>
    </Container>
  );
};

export default LabeledTextInput;
