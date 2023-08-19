import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { ClientProvider } from './context/ClientContext';

function App() {
  return (
    <>
      <ClientProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ClientProvider>
    </>
  );
}

export default App;
