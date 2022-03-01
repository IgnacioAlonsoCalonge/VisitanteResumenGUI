import './App.css';
import NavBarFinal from './Components/NavBarFinal';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Resumenes from "./Resumenes";
import Login from './Login';
import Register from './Components/Register';


function App() {
  return (
    <div className="App">
      <NavBarFinal/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resumenes' element={<Resumenes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/registrar" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
