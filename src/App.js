import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { SetCookies } from "./cookie";
import Signup from "./component/Signup";
import LoginPage from "./component/LoginPage";
import Navbar from "./component/Navbari";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbari from "./component/Navbari";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbari />
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/loginpage' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
