import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/main';
import { UserContextProvider } from './contexts/UserContext';
import { Cadastrate } from './components/cadastrate';

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