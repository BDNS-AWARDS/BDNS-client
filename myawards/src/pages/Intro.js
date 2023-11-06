import React from "react";
import "../css/Intro.css";
import styled from "styled-components";
import KakaoLoginButton from "../components/KakaoLoginButton";

const Appname = styled.div`
  font-family: "Santokki", sans-serif;
  font-size: 64px;
  color: #f7cc44;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const Intro = () => {
  return (
    <div className="intro">
      <div id="appname">
        올해의
        <p id="year">2023</p>
      </div>
      <Appname>
        마이 어워즈 <img id="medal" src="images/medal.png" alt="medal" />
      </Appname>
      <KakaoLoginButton id="button" />
    </div>
  );
};

export default Intro;
