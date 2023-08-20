import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
