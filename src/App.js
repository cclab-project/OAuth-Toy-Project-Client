import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AddInfo from "./pages/AddInfo/AddInfo";
import Franchisee from "./pages/Franchisee/Franchisee";
import Background from "./components/Background/Background";
import StoreAdminLogin from "./pages/StoreAdminLogin/StoreAdminLogin";
import StoreAdminJoin from './pages/StoreAdminJoin/StoreAdminJoin';
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

    <Router>
      <Routes>
        <Route path="/" element={<Background><Login /></Background>} />
        <Route path="/Home" element={<Background><Home /></Background>} />
        <Route path="/AddInfo" element={<Background><AddInfo /></Background>} />
        <Route path="/Franchisee" element={<Background><Franchisee /></Background>} />
        <Route path="/AdminLogin" element={<StoreAdminLogin />} />
        <Route path="/AdminJoin" element={<StoreAdminJoin />} />
        <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
      </Routes>
    </Router>

  );
}

export default App;
