import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path={'/home'} element={<Home/>}/>
        </Routes>
      </div>

      <Footer/>
    </div>

  )
}

export default App
