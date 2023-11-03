import React from "react";
import styled from "styled-components";
import "../css/fonts/font.css";

const LogoTxt = styled.p`
  color: #f7cc44;
  font-family: "Santokki";
  font-size: 20px;
  display: inline-block;
`;

const LogoImg = styled.img`
  width: 42px;
  height: 42px;
  display: inline-block;
  margin-top: 20px;
`;

const StyledLogo = styled.div``;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoTxt>올해의 마이 어워즈</LogoTxt>
      <LogoImg src={process.env.PUBLIC_URL + "./images/medal.png"} />
    </StyledLogo>
  );
};

export default Logo;
