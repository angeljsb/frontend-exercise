import React from "react";

const TableRow = (props = {}) => {
  const { register, ...otherProps } = props;

  return (
    <tr className="table-row" {...otherProps}>
      {register.map((value, index) => {
        <td className="table-row__cell" key={index}>
          {value}
        </td>;
      })}
    </tr>
  );
};

export default TableRow;
