import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ClientRegistration from './pages/clientRegistration/ClientRegistration';

function App() {

  return (
    <div>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/new-client'} element={<ClientRegistration/>}/>
          <Route path={'/update-client/:id'} element={<ClientRegistration/>}/>
        </Routes>
      </div>

      <Footer/>
    </div>

  )
}

export default App
