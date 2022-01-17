import React from "react";
import "./style.css";

const TableRow = (props = {}) => {
  const { register, ...otherProps } = props;

  console.log(register);

  return (
    <tr className="table-row" {...otherProps}>
      {register.map((value, index) => (
        <td className="table-row__cell" key={index}>
          {value}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
