import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { ClientProvider } from './context/ClientContext';
import EditClient from './pages/editClient/EditClient';
import WebRoutes from './constants/WebRoutes';

function App() {
  return (
    <>
      <ClientProvider>
        <Routes>
          <Route path={WebRoutes.HOME} element={<Home />} />
          <Route path={WebRoutes.CLIENT_EDIT} element={<EditClient />} />
        </Routes>
      </ClientProvider>
    </>
  );
}

export default App;
