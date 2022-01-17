import React from "react";
import TableRow from "../../molecules/TableRow";

const ArticlesTable = (props = {}) => {
  const { articles, ...otherProps } = props;

  const fields = ["author", "title", "content", "date", ""];

  return (
    <table className="articles-table" {...otherProps}>
      <thead>
        <tr className="articles-table__header-row">
          {fields.map((field, index) => (
            <th className="articles-table__header-cell" key={index}>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {articles === null
          ? ""
          : articles.map((article, index) => (
              <TableRow register={article} key={index}></TableRow>
            ))}
      </tbody>
    </table>
  );
};

export default ArticlesTable;
