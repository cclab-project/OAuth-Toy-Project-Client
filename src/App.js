import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AddInfo from "./pages/AddInfo/AddInfo";
import Franchisee from "./pages/Franchisee/Franchisee";
import Background from "./components/Background/Background";

//redirection
import KakaoRedirection from "./pages/Redirection/KakaoRedirection/KakaoRedirection";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <Background>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddInfo" element={<AddInfo />} />
          <Route path="/Franchisee" element={<Franchisee />} />
          <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
        </Routes>
      </Router>
    </Background>
  );
}

export default App;
