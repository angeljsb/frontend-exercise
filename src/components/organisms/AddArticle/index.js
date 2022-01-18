import React, { useContext } from "react";
import ArticlesForm from "../../organisms/ArticlesForm";
import Subtitle from "../../atoms/Subtitle";
import Text from "../../atoms/Text";
import "./style.css";
import ArticlesTable from "../ArticlesTable";
import { useParams } from "react-router-dom";
import ArticlesContext from "../../../context/ArticlesContext";

const AddArticle = (props = {}) => {
  const { articles, reload } = useContext(ArticlesContext);
  const { articleId } = useParams();

  const editing =
    articleId && articles
      ? articles.find((r) => r.id === parseInt(articleId))
      : null;
  console.log(editing);

  return (
    <section className="add-article">
      <div className="add-article__container">
        <div className="add-article__subtitle-container">
          <Subtitle size="small">Add New Blog Article</Subtitle>
        </div>
        <div className="add-article__text-container">
          <Text>
            Publish a new blog article to feature in the Easybank homepage.
          </Text>
        </div>
        <div className="add-article__form-container">
          <ArticlesForm onSend={reload} editing={editing} />
        </div>
        <div className="add-article__subtitle-container">
          <Subtitle size="small">Previous Articles</Subtitle>
        </div>
        <div className="add-article__text-container">
          <Text>
            Review and edit previous blog posts published on to the homepage.
          </Text>
        </div>
        <div className="add-article__table-container">
          <ArticlesTable articles={articles} />
        </div>
      </div>
    </section>
  );
};

export default AddArticle;
