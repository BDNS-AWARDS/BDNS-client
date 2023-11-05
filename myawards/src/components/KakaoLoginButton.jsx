import React from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
background-color: #f7cc44;
border: 1px solid #000;
border-radius: 10px;
padding: 10px 20px;
font-family: "CinemaB", sans-serif;
font-size: 20px;
margin-top:30px;
margin-bottom:30px;
width:352px;
height:62px;`

const KakaoLoginButton = () => {
    return (
        <div>
            <StyledButton>카카오로 시작하기</StyledButton>
        </div>
    );
};

export default KakaoLoginButton;