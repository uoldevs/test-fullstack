import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Page404 from './pages/Page404';
import CustomerDetails from './pages/CustomerDetails';
import RegisterCostumer from './pages/RegisterCostumer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={RegisterCostumer} />
        <Route path="/customer/:id" Component={CustomerDetails} />
        <Route path="*" Component={Page404} />
      </Routes>
    </>
  );
}

export default App;
