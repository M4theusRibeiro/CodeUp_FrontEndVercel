import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HeaderPrincipal } from "./components/Home/HeaderPrincipal";
import Monaco from "./components/Monaco/MonacoEditor.jsx";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
