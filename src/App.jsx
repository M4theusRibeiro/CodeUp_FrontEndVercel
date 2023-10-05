import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HeaderPrincipal } from "./components/Home/HeaderPrincipal";
import Monaco from "./components/Monaco/MonacoEditor.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terminal" element={<Monaco />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
