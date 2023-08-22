import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Provider from './context/Provider';
import ClientsBoard from './pages/ClientsBoard';
import ClientEdit from './pages/ClientEdit';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './styles/Theme';

function App() {
  return (
  <Provider>
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/clients" replace />} />
        <Route path="/clients" element={ <ClientsBoard /> } />
        <Route path="/client/edit" element={ <ClientEdit /> } />
      </Routes>
    </ThemeProvider>
  </Provider>
  );
}

export default App;
