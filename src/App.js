import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Navbari from "./component/Navbari";

import More from "./component/More";
import Homepage from "./component/Homepage";
import LoginPage from "./component/LoginPage";
function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
          <Navbari />
          <Routes>
              <Route exact path='/home' element={<Homepage/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/more-info/:id' element={<More/>} />
              <Route path='/signup' element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}
export default App;
