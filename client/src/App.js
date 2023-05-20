import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import FootPrintPage from "./pages/FootPrintPage/FootPrintPage";
// import Footer from "./Layout/Footer";
import Opening from "./Layout/Opening";
import Auth from "./hoc/auth";

function App() {
  // 페이지마다 권한체크하기 위해 Auth 컴포넌트로 감싸주기
  const NewLandingPage = Auth(HomePage, false);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  const NewFootPringPage = Auth(FootPrintPage, true);

  return (
    <div className="App">
      <Router>
        {/* <Nav/> */}

        <Routes>
          <Route exact path="/" element={<NewLandingPage />} />
          <Route exact path="/login" element={<NewLoginPage />} />
          <Route exact path="/register" element={<NewRegisterPage />} />
          <Route exact path="/footprint" element={<NewFootPringPage />} />
          <Route exact path="/opening" element={<Opening />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
