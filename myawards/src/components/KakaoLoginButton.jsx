import React from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
    font-family: "CinemaB", sans-serif;
    font-size: 20px;
    margin-top:400px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background:none;
    border:none;
`;

const Image=styled.img`
    width:352px;
    height:70px;
    align-self:center;
    `

const KakaoLoginButton = () => {
    return (
        <div>
            <StyledButton><Image id="kakaologin_button" src="images/kakaologin.png" alt="loginbutton" /></StyledButton>
        </div>
    );
};

export default KakaoLoginButton;