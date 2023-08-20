import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Edit from './pages/Edit'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path= '/edit/:id' element={<Edit />} />
      <Route path= '*' element={<h1>Not Found</h1>} />
    </Routes>

  )
}

export default App
