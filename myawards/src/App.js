import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import SetProfile from "./pages/SetProfile";
import MainPage from "./pages/MainPage";
import Posting from "./pages/Posting";
import GameStart from "./pages/GameStart";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // 페이지가 렌더링된 후 페이지 내용의 높이를 계산합니다
    const pageContent = document.getElementById("page-content");
    if (pageContent) {
      const pageHeight = pageContent.scrollHeight;
      const windowHeight = window.innerHeight;

      // 페이지 내용의 높이가 화면 높이보다 큰 경우 스크롤을 활성화합니다
      if (pageHeight > windowHeight) {
        pageContent.style.overflowY = "scroll";
      }
    }
  }, []);
  return (
    <Routes>
      <Route path="/intro" element={<Intro />}></Route>
      <Route path="/mainpage" element={<MainPage />}></Route>
      <Route path="/posting" element={<Posting />}></Route>
      <Route path="/setprofile" element={<SetProfile />}></Route>
      <Route path="/gamestart" element={<GameStart />}></Route>
    </Routes>
  );
}

export default App;
