import React from "react";
import Logo from "../components/Logo";
import "../css/SetProfile.css";
import styled from "styled-components";

const Title = styled.p`
  font-family: "Santokki", sans-serif;
  font-size: 24px;
  color: #ffffff;
  text-align: left;
  margin-top: 20px;
  -webkit-text-stroke: 0.5px #000;
`;

const SetProfile = () => {
  return (
    <div id="setprofile">
      <Logo />
      <Title>사용하실 닉네임을 적어주세요! </Title>
      <p>한글, 영어, 숫자, 특수문자 사용가능/띄어쓰기 불가</p>
      <button>중복확인</button>
      <br />
      <Title>프로필 사진을 추가해보세요!</Title>
      <img className="photo" src="images/addphoto.png" alt="photo" />
      <p>
        '올해의 마이 어워즈 2023'을 이용해 주셔서 감사합니다.
        <br />
        올해의 추억을 돌아보는 과정 속에서 여러분들의 입가에
        <br />
        미소를 띄울 수 있는 서비스가 되었으면 좋겠습니다.
        <br />
        <br />올 한해 고생 많으셨습니다. 내년은 더 행복하세요:)
      </p>
      <img className="letter" src="images/letter.png" alt="photo" />
      <button>올해의 마이 어워즈 시작하기</button>
    </div>
  );
};

export default SetProfile;
