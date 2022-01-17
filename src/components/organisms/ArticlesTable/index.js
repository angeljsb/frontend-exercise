import React from "react";
import TableRow from "../../molecules/TableRow";
import Container from "../../atoms/Container";
import Link from "../../atoms/Link";
import "./style.css";

const ArticlesTable = (props = {}) => {
  const { articles, ...otherProps } = props;

  const formated = articles?.map((article) => {
    return {
      ...article,
      date: new Date(article.date).toLocaleDateString(),
      content:
        article.content.length > 35
          ? article.content.substring(0, 35) + "..."
          : article.content,
    };
  });

  const fields = ["author", "title", "content", "date"];

  return (
    <Container rounded className="articles-table">
      <table className="articles-table__table" {...otherProps}>
        <thead>
          <tr className="articles-table__header-row">
            {fields.map((field, index) => (
              <th className="articles-table__header-cell" key={index}>
                {field}
              </th>
            ))}
            <th className="articles-table__header-cell"></th>
          </tr>
        </thead>
        <tbody>
          {articles === null ? (
            <tr></tr>
          ) : (
            formated.map((article, index) => {
              const register = fields.map((key) => article[key]);
              register.push(
                <Link to={`/articles/${articles[index].id}`}>Edit</Link>
              );
              return <TableRow register={register} key={index}></TableRow>;
            })
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default ArticlesTable;
