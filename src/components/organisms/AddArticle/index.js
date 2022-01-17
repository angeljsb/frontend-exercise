import React, { useEffect, useState } from "react";
import Api from "../../../api";
import ArticlesForm from "../../organisms/ArticlesForm";
import Subtitle from "../../atoms/Subtitle";
import Text from "../../atoms/Text";
import "./style.css";
import ArticlesTable from "../ArticlesTable";

const AddArticle = (props = {}) => {
  const [data, setData] = useState(null);
  const [watcher, setWatcher] = useState(true);

  useEffect(() => {
    Api.get()
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, [watcher]);

  const triggerUpdate = () => setWatcher(!watcher);

  return (
    <section className="add-article">
      <div className="add-article__subtitle-container">
        <Subtitle size="small">Add New Blog Article</Subtitle>
      </div>
      <div className="add-article__text-container">
        <Text>
          Publish a new blog article to feature in the Easybank homepage.
        </Text>
      </div>
      <div className="add-article__form-container">
        <ArticlesForm onSend={triggerUpdate} />
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
        <ArticlesTable articles={data} />
      </div>
    </section>
  );
};

export default AddArticle;
