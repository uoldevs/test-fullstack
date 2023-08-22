import './App.css'
import ViewClients from './pages/ClientsTablePage/ViewClients'
import EditClient from './pages/clientsEditPage/EditClient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterClient from './pages/clientsRegisterPage/RegisterClient';


function App() {

  return (
    <div className='app'>
      <BrowserRouter basename='/clientes'>
        <Routes>
          <Route path="/" element={ <ViewClients /> } />
          <Route path="/:id" element={ <EditClient /> } />
          <Route path="/cadastro" element={<RegisterClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
