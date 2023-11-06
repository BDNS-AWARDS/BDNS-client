import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 20px;
  margin-left: 40px;
  border: none;
  background: none;
`;

const Image = styled.img`
  width: 352px;
  height: 61px;
`;

const EditNameButton = ({ isActive, onClick }) => {
  const buttonImage = isActive ? "images/nickchange_on.png" : "images/nickchange_off.png";

  return (
    <div>
      <StyledButton onClick={onClick}>
        <Image src={buttonImage} alt="Change" />
      </StyledButton>
    </div>
  );
};

export default EditNameButton;
