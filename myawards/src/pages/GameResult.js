import React, { useState } from "react";
import styled from "styled-components";
import "../css/GameResult.css";
import Logo from "../components/Logo";

const Title = styled.p`
  font-family: "Santokki", sans-serif;
  font-size: 52px;
  color: #f7cc44;
  text-align: center;
  margin-top: 20px;
  -webkit-text-stroke: 1px #000;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  border: none;
  background: none;
`;

const GameResult = () => {
  //서버로부터 받은 랜덤 이름을 표시

  const randomName = "랜덤으로 선택된 이름";

  return (
    <div id="gamebox">
      <Logo id="logo" />
      <Title>어워즈 발표 게임</Title>
      <img className="mic" src="images/mic.png" alt="mic" />
      <p id="middletitle">어워즈 주제</p>
      <p id="middletitle">{`${randomName}부터 시계방향!`}</p>
      <StyledButton>
        <img id="button" src="images/gamestart2.png" alt="button" />
      </StyledButton>
    </div>
  );
};

export default GameResult;
