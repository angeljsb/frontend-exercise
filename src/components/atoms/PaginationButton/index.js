import React from "react";
import "./style.css";

const PaginationButton = (props = {}) => {
  const { children, active, disabled, ...otherProps } = props;
  const activeClass = active ? "pagination-button--active" : "";
  const disabledClass = disabled ? "pagination-button--disabled" : "";
  return (
    <button
      className={`pagination-button ${activeClass} ${disabledClass}`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
