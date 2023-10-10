import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Monaco from "./components/Monaco/MonacoEditor.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/terminal" element={<Monaco />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
