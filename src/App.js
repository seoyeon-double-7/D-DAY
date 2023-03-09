// import { BrowserRouter, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import FootPrintPage from "./pages/FootPrintPage/FootPrintPage";
import Nav from "./components/NavBar/NavBar";

import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/footprint" element={<FootPrintPage/>}></Route>
      </Routes>

      

      </BrowserRouter>

      
    </div>
  );
}

export default App;
