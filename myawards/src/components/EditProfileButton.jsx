import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 40px;
  margin-bottom: 70px;
  margin-left: 40px;
  border: none;
  background: none;
`;

const Image = styled.img`
  width: 90%;
  margin-left: -43px;
`;

const EditProfileButton = ({ isEnabled, onClick }) => {
  const buttonImage = isEnabled ? "images/editprofile_on.png" : "images/editprofile_off.png";

  const handleClick = () => {
    // EditProfileButton이 클릭되었을 때 실행될 로직 추가
    // 여기에서 EditProfile 컴포넌트의 handleStartButtonClick 함수를 호출
    onClick();
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>
        <Image src={buttonImage} alt="Change" />
      </StyledButton>
    </div>
  );
};

export default EditProfileButton;
