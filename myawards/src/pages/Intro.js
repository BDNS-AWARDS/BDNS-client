import React from "react";
import "../css/Intro.css";
import styled from "styled-components";
import KakaoLoginButton from "../components/KakaoLoginButton";

const Appname = styled.p`
  font-family: "Santokki", sans-serif;
  font-size: 64px;
  color: #f7cc44;
  margin-top: 0px;
`;

const Number = styled.p`
  font-family: "Santokki", sans-serif;
  font-size: 24px;
  color: #ffffff;
`;

const Intro = () => {
  return (
    <div className="intro">
      <Appname>
        <Number>2023</Number>
        올해의
        <br />
        마이 어워즈
      </Appname>
      <KakaoLoginButton className="button" />
    </div>
  );
};

export default Intro;
