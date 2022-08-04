
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Component/Login'
import Voter from './Component/Voter';
import Admin from './Component/Admin';
import Home from './Component/Home';
import ElectrolOfficer from './Component/ElectrolOfficer';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/voter" element={<Voter />} />
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/electrol-officer" element={<ElectrolOfficer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
