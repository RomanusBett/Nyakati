import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/auth/login';
import Register from './components/auth/register';
import Home from './components/clientside/home';
import Account from './pages/account';

const App =()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/accounts/login' element={<Login />}/>
      <Route path='/accounts/register' element={<Register />}/>
      <Route path='/accounts/register' element={<Register />}/>
      <Route path='/accounts/profile' element={<Home/>}/>
      <Route path='/' element={<Account/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
