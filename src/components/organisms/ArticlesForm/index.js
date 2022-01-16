import React from "react";
import { Modal } from "react-responsive-modal";
import { useState } from "react/cjs/react.development";
import LabeledTextInput from "../../molecules/LabeledTextInput";
import Subtitle from "../../atoms/Subtitle";
import Container from "../../atoms/Container";
import Button from "../../atoms/Button";
import "react-responsive-modal/styles.css";
import "./style.css";

const ArticlesForm = (props = {}) => {
  const { open, onClose, ...otherProps } = props;

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Modal open={open} onClose={onClose} center>
      <form className="articles-form" {...otherProps}>
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
              onChange={handleChangeAuthor}
            ></LabeledTextInput>
            <LabeledTextInput
              id="title"
              name="title"
              label="Title"
              value={title}
              onChange={handleChangeTitle}
            ></LabeledTextInput>
            <LabeledTextInput
              id="content"
              name="content"
              label="Content"
              value={content}
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
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button type="submit" size="small" color="primary">
              Guardar
            </Button>
          </Container>
        </Container>
      </form>
    </Modal>
  );
};

export default ArticlesForm;
