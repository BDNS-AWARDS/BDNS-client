import React, { useState } from "react";
import styled from "styled-components";
import "../css/GameStart.css";
import Logo from "../components/Logo";
import GameStartButton from "../components/GameStartButton";

const Title = styled.p`
  font-family: "Santokki", sans-serif;
  font-size: 52px;
  color: #f7cc44;
  text-align: center;
  margin-top: 20px;
  -webkit-text-stroke: 1px #000;
`;

const Contents = styled.p`
  font-family: "CinemaL", sans-serif;
  font-size: 14px;
  color: #f7cc44;
  margin-left: -20px;
  margin-top: -50px;
`;

const MiddleTitle = styled.p`
  font-family: "Santokki", sans-serif;
  font-size: 28px;
  color: #f7cc44;
  text-align: center;
  margin-top: 10px;
  -webkit-text-stroke: 0.7px #000;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: -10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  height: 28px;
  text-align: left;
  font-family: "CinemaB", sans-serif;
  font-size: 16px;
  color: ${(props) =>
    props.textValue ? "#000" : "#9b9ba4"}; // 조건부로 텍스트 색상 변경
`;

const GameStart = () => {
  const inputFields = Array(8).fill(""); // 8개의 빈 문자열 생성
  const [inputValues, setInputValues] = useState(Array(8).fill("")); // 입력된 값 상태

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  // 버튼을 활성화하기 위한 조건 수정
  const isButtonDisabled = inputValues
    .slice(0, 2)
    .some((value) => value.trim() === "");

  return (
    <div id="gamebox">
      <Logo />
      <Title>어워즈 발표 게임</Title>
      <Contents>친구들과 돌아가며 나만의 어워즈를 공유해보세요!</Contents>
      <img className="mic" src="images/mic.png" alt="mic" />
      <MiddleTitle>참가자 이름을 입력해 주세요!</MiddleTitle>
      <InputContainer>
        {inputFields.map((_, index) => (
          <Input
            key={index}
            type="text"
            placeholder={`이름(8자 내외)`}
            textValue={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </InputContainer>
      <GameStartButton disabled={isButtonDisabled} />
    </div>
  );
};

export default GameStart;
