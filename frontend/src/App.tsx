import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import ClientForm from './pages/ClientForm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ClientForm />} />
        <Route path="/update/:id" element={<ClientForm />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2500} theme="dark" />
      <Footer />
    </>
  );
}

export default App;
