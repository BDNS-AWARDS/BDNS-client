import React from 'react';
import styled from 'styled-components';

const CheckButtonContainer = styled.div`
  text-align: right;
  margin-right:30px;
`

const StyledButton = styled.button`
  background-color: #8B4513;
  border: 0.5px solid #000000;
  width:83px;
  height:33px;
  font-size: 16px;
  font-family: "CinemaL", sans-serif;
  color: #FFFFFF; /* 글자색을 흰색으로 설정 */
  border-radius: 5px; /* 모서리를 둥근 사각형으로 설정 */
  cursor: ${(props) => (props.isButtonEnabled ? 'pointer' : 'not-allowed')}; // 버튼 활성화 상태에 따라 커서 스타일 변경
`;

const CheckButton = ({ isButtonEnabled, onClick }) => {
  return (
    <CheckButtonContainer>
      <StyledButton
        isButtonEnabled={isButtonEnabled}
        onClick={isButtonEnabled ? onClick : null} // 버튼이 활성화되지 않으면 클릭 이벤트를 무시
      >
        중복확인
      </StyledButton>
    </CheckButtonContainer>
  );
};

export default CheckButton;
