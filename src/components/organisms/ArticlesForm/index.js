import React, { useState } from "react";
import LabeledTextInput from "../../molecules/LabeledTextInput";
import Container from "../../atoms/Container";
import Button from "../../atoms/Button";
import "./style.css";
import Api from "../../../api";

const ArticlesForm = (props = {}) => {
  const { onSend, ...otherProps } = props;

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      author: form["author"].value,
      title: form["title"].value,
      content: form["content"].value,
    };

    setLoading(true);
    Api.post(data)
      .then((res) => res.json())
      .then((json) => {
        onSend(json);
      })
      .finally(() => setLoading(false));
  };

  const isDanger = (value) => value.length < 3 || value.length > 50;

  const saveButtonDisabled = () => {
    return loading || [author, title, content].some(isDanger);
  };

  return (
    <div className="articles-form">
      <form onSubmit={handleSubmit} {...otherProps}>
        <Container className="articles-form__container">
          <LabeledTextInput
            id="author"
            name="author"
            label="Author"
            value={author}
            danger={isDanger(author)}
            onChange={handleChangeAuthor}
          ></LabeledTextInput>
          <LabeledTextInput
            id="title"
            name="title"
            label="Blog Title"
            value={title}
            danger={isDanger(title)}
            onChange={handleChangeTitle}
          ></LabeledTextInput>
          <LabeledTextInput
            id="content"
            name="content"
            label="Blog Content"
            value={content}
            danger={isDanger(content)}
            type="textarea"
            resize="vertical"
            onChange={handleChangeContent}
          ></LabeledTextInput>
          <Button type="submit" disabled={saveButtonDisabled()}>
            Save
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default ArticlesForm;
