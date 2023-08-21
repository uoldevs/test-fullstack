import { Route, Routes } from 'react-router-dom';
import ListClients from './pages/ListClients';
import AddClient from './pages/AddClient';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/client/add' element={ <AddClient /> }/>
        <Route path='/client/:id' element={ <AddClient /> }/>
        <Route path='/' element={ <ListClients /> }/>
       </Routes>
    </div>
  );
}

export default App;
