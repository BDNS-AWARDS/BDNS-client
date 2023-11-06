import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#f7cc44")};
  color: ${(props) => (props.disabled ? "#000" : "#000")};
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px 20px;
  font-family: "CinemaB", sans-serif;
  font-size: 20px;
  margin-top:30px;
  margin-bottom:30px;
  width:352px;
  height:62px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, color 0.3s;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#ffc400")};
  }
`;

const GameStartButton = ({ disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      어워즈 발표 게임 시작하기
    </StyledButton>
  );
};

export default GameStartButton;
