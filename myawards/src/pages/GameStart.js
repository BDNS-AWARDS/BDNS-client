import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "../css/GameStart.css";
import Logo from "../components/Logo";
import GameStartButton from "../components/GameStartButton";

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
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  // 버튼을 활성화하기 위한 조건 수정
  const isButtonDisabled = inputValues
    .slice(0, 2)
    .some((value) => value.trim() === "");

  const handleSubmit = async () => {
    // 입력된 이름을 서버로 POST 요청을 보냅니다.
    try {
      const response = await axios.post("/api/randomName", {
        names: inputValues.slice(0, 2), // 예시로 처음 2개 이름을 보냅니다.
      });

      // 서버에서 받은 랜덤 이름을 사용할 수 있습니다.
      const randomName = response.data.randomName;

      // 결과 페이지로 이동
      navigate("/gameresult");
    } catch (error) {
      // 오류 처리
      console.error("오류 발생:", error);
    }
  };

  return (
    <div id="gamebox">
      <Logo />
      <p id="title">어워즈 발표 게임</p>
      <p id="contents">친구들과 돌아가며 나만의 어워즈를 공유해보세요!</p>
      <img className="mic" src="images/mic.png" alt="mic" />
      <p id="middletitle">참가자 이름을 입력해 주세요!</p>
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
      <GameStartButton disabled={isButtonDisabled} onClick={handleSubmit} />
    </div>
  );
};

export default GameStart;
