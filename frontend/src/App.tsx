import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { UserContextProvider } from './contexts/UserContext';
import { Cadastrate } from './pages/cadastrate';

function App() {
  return (
    <UserContextProvider>
    <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/cadastrate" element={ <Cadastrate /> } />
    </Routes>
    </UserContextProvider>
  );
}

export default App;