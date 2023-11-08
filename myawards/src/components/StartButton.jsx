import React from "react";
import styled from "styled-components";

const StyledButton=styled.button`
  margin-top:50px;
  margin-left:40px;
  border: none;
  background:none;
`;

const Image=styled.img`
  width: 352px;
  height: 61px;
`;

const StartButton = ({ isEnabled, onClick }) => {
  const buttonImage = isEnabled ? "images/start_on.png" : "images/start_off.png";

  return (
    <StyledButton onClick={onClick}>
      <Image src={buttonImage} alt="Start" />
    </StyledButton>
  );
};

export default StartButton;
