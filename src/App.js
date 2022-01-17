import "./App.css";
import Welcome from "./components/pages/Welcome";
import Articles from "./components/pages/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
