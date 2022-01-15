import "./App.css";
import Welcome from "./components/pages/Welcome";
import Articles from "./components/pages/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SvgBackground from "./components/atoms/SvgBackground";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SvgBackground>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/articles" element={<Articles />}/>
          </Routes>
        </SvgBackground>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
