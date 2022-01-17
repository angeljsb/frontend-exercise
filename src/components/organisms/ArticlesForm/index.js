import React, { useEffect, useState } from "react";
import LabeledTextInput from "../../molecules/LabeledTextInput";
import Container from "../../atoms/Container";
import Button from "../../atoms/Button";
import "./style.css";
import Api from "../../../api";
import { useNavigate, useParams } from "react-router-dom";

const ArticlesForm = (props = {}) => {
  const { onSend, editing, ...otherProps } = props;
  const { articleId } = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editing) {
      setAuthor(editing.author);
      setTitle(editing.title);
      setContent(editing.content);
    }
  }, [editing]);

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

    const data = {
      author,
      title,
      content,
    };
    if (articleId) data.id = parseInt(articleId);

    const method = articleId ? "put" : "post";

    setLoading(true);
    Api[method](data)
      .then((res) => res.json())
      .then((json) => {
        onSend(json);
      })
      .finally(() => {
        setLoading(false);
        setAuthor("");
        setTitle("");
        setContent("");
        navigate("/articles");
      });
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
            disabled={loading}
            onChange={handleChangeAuthor}
          ></LabeledTextInput>
          <LabeledTextInput
            id="title"
            name="title"
            label="Blog Title"
            value={title}
            danger={isDanger(title)}
            disabled={loading}
            onChange={handleChangeTitle}
          ></LabeledTextInput>
          <LabeledTextInput
            id="content"
            name="content"
            label="Blog Content"
            value={content}
            danger={isDanger(content)}
            disabled={loading}
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
