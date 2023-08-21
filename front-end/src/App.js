import React from "react";
import Home from "./pages/Home";
import Edicao from "./pages/Edicao";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edicao" element={<Edicao />}/>
        <Route path="/edicao/:id" element={<Edicao />} />
      </Routes>
    </Router>
  );
}

export default App;
