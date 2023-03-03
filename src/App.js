import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import LoginPage from "./component/LoginPage";
import Navbari from "./component/Navbari";
import Homepage from "./component/Homepage";
import More from "./component/More";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbari />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/more-info/:id" element={<More/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
