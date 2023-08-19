import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { ClientProvider } from './context/ClientContext';
import EditClient from './pages/editClient/EditClient';
import WebRoutes from './constants/WebRoutes';
import CreateClient from './pages/createClient/CreateClient';
import PageHeader from './components/pageHeader/PageHeader';

function App() {
  return (
    <>
      <PageHeader />
      <ClientProvider>
        <Routes>
          <Route path={WebRoutes.HOME} element={<Home />} />
          <Route path={WebRoutes.CLIENT_EDIT} element={<EditClient />} />
          <Route path={WebRoutes.CREATE_CLIENT} element={<CreateClient />} />
        </Routes>
      </ClientProvider>
    </>
  );
}

export default App;
