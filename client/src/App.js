import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Opening from "./Layout/Opening";
import Ending from "./Layout/Ending";
import GamePage from "./pages/GamePage/GamePage";
import { GameClear } from "./pages/GamePage/GameResult";
import FootPrintPage from "./pages/FootPrintPage/FootPrintPage";
import RankPage from "./pages/RankPage/RankPage";
import MyPage from "./pages/MyPage/MyPage";

// import Footer from "./Layout/Footer";

import Auth from "./hoc/auth";

function App() {
  // 페이지마다 권한체크하기 위해 Auth 컴포넌트로 감싸주기
  const NewLandingPage = Auth(HomePage, false);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  const NewFootPrintPage = Auth(FootPrintPage, true);
  const NewRankPage = Auth(RankPage, true);
  const NewMyPage = Auth(MyPage, true);
  const NewGamePage = Auth(GameClear, true);

  return (
    <div className="App">
      <Router>
        {/* <Nav/> */}

        <Routes>
          <Route exact path="/" element={<NewLandingPage />} />
          <Route exact path="/login" element={<NewLoginPage />} />
          <Route exact path="/register" element={<NewRegisterPage />} />
          <Route exact path="/footprint" element={<NewFootPrintPage />} />
          <Route exact path="/opening" element={<Opening />} />
          <Route exact path="/ending" element={<Ending />} />
          <Route exact path="/ranking" element={<NewRankPage />} />
          <Route exact path="/mypage" element={<NewMyPage />} />
          <Route exact path="/d-day" element={<GamePage />} />
          <Route exact path="/d-day/clear" element={<NewGamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
