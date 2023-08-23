import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Recovery from './pages/Recovery';
import './App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login/recovery' element={<Recovery/>}/>
        <Route path='*' element={<NotFound/> }/>
      </Routes>
    </div>
  );
}

export default App;
