import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Terminal from './routes/TerminalOnline/index.jsx';
import HomePage from './routes/HomePage/index.jsx';
import Cadastro from './routes/Cadastro/index.jsx';
import Fases from './routes/Fases/index.jsx';
import Login from './routes/Login/index.jsx';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="fases" element={<Fases />} />
      <Route path="login" element={<Login />} />
      <Route path="terminal" element={<Terminal />} />
      <Route path="app" element={<App />} />
    </Routes>
  </BrowserRouter>

);

