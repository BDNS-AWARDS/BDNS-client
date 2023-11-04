import React from "react";
import styled from "styled-components";
import "../css/fonts/font.css";
import HashTag from "./HashTag";

const StyledList = styled.div`
  background-color: #f7cc44;
  width: 85%;
  height: 40px;
  border-radius: 10px;
  margin-left: 30px;
`;

const MyList = () => {
  return (
    <StyledList>
      <HashTag />
    </StyledList>
  );
};

export default MyList;
