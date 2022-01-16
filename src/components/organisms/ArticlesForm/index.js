import React from "react";
import { Modal } from "react-responsive-modal";
import { useState } from "react/cjs/react.development";
import LabeledTextInput from "../../molecules/LabeledTextInput";
import Subtitle from "../../atoms/Subtitle";
import Container from "../../atoms/Container";
import Button from "../../atoms/Button";
import "react-responsive-modal/styles.css";
import "./style.css";
import Api from "../../../api";

const ArticlesForm = (props = {}) => {
  const { open, onClose, onSend, ...otherProps } = props;

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
        realOnClose();
        onSend(json);
      })
      .finally(() => setLoading(false));
  };

  const isDanger = (value) => value.length < 3 || value.length > 50;

  const saveButtonDisabled = () => {
    return loading || [author, title, content].some(isDanger);
  };

  const realOnClose = () => {
    onClose();
    setAuthor("");
    setTitle("");
    setContent("");
  };

  return (
    <Modal open={open} onClose={realOnClose} center>
      <form className="articles-form" onSubmit={handleSubmit} {...otherProps}>
        <Container className="articles-form__container">
          <Container className="articles-form__header">
            <Subtitle size="small" color="black">
              Insert new article
            </Subtitle>
          </Container>
          <Container className="articles-form__body">
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
              label="Title"
              value={title}
              danger={isDanger(title)}
              onChange={handleChangeTitle}
            ></LabeledTextInput>
            <LabeledTextInput
              id="content"
              name="content"
              label="Content"
              value={content}
              danger={isDanger(content)}
              type="textarea"
              resize="vertical"
              onChange={handleChangeContent}
            ></LabeledTextInput>
          </Container>
          <Container className="articles-form__footer">
            <Button
              type="button"
              size="small"
              color="secondary"
              onClick={realOnClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="small"
              color="primary"
              disabled={saveButtonDisabled()}
            >
              Save
            </Button>
          </Container>
        </Container>
      </form>
    </Modal>
  );
};

export default ArticlesForm;
