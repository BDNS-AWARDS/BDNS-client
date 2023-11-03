import React from "react";
import styled from "styled-components";
import "../css/fonts/font.css";

const LogoTxt = styled.p`
  color: #f7cc44;
  font-family: "Santokki";
  font-size: 20px;
  display: inline-block;
  -webkit-text-stroke: 0.02cm black;
`;

const LogoImg = styled.img`
  width: 26px;
  height: 26px;
  display: inline-block;
  padding-left: 5px;
  margin-bottom: -8px;
`;

const StyledLogo = styled.div`
  margin: 20px 0px 0px 30px;
  padding-top: 30px;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoTxt>올해의 마이 어워즈</LogoTxt>
      <LogoImg src={process.env.PUBLIC_URL + "./images/medal.png"} />
    </StyledLogo>
  );
};

export default Logo;
