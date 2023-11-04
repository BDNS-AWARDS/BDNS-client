import React from "react";
import Logo from "../components/Logo";
//import styled from "styled-components";
import "../css/MyPage.css";
import MiniProfile from "../components/MiniProfile";
import MyList from "../components/MyList";

function MyPage(props) {
  return (
    <div id="mypage_box">
      <br />
      <Logo />
      <div id="awardlist_box">
        <div id="mypage_title">
          <p id="mp_title_txt">수상 내역</p>
          <img
            id="trophy"
            src={process.env.PUBLIC_URL + "./images/trophy.png"}
          />
        </div>
        <div id="mypage_profile">
          <MiniProfile />
        </div>

        <MyList />
      </div>

      <div id="scraplist_box">
        <div id="mypage_title">
          <p id="mp_title_txt">스크랩</p>
          <img
            id="trophy"
            src={process.env.PUBLIC_URL + "./images/trophy.png"}
          />
        </div>
        <div id="myscrap_box">
          <MyList />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
