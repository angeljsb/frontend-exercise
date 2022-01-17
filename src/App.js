import "./App.css";
import Welcome from "./components/pages/Welcome";
import Articles from "./components/pages/Articles";
import ArticlesContext from "./context/ArticlesContext";
import Api from "./api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState(null);

  const realoadArticles = () => {
    Api.get()
      .then((res) => res.json())
      .then((json) => setArticles(json.data));
  };

  useEffect(() => {
    Api.get()
      .then((res) => res.json())
      .then((json) => setArticles(json.data));
  }, []);

  return (
    <div className="App">
      <ArticlesContext.Provider value={{ articles, reload: realoadArticles }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<Articles />} />
          </Routes>
        </BrowserRouter>
      </ArticlesContext.Provider>
    </div>
  );
}

export default App;
