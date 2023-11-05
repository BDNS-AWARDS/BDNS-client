import React, { useState } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import "../css/SetProfile.css";
import styled from "styled-components";
import CheckButton from "../components/CheckButton";
import CheckModal from "../components/CheckModal";
import StartButton from "../components/StartButton";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
`;

const Input = styled.input`
  border: 1px #ffffff solid;
  outline: none;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  width: 370px;
  height: 30px;
  text-align: left;
  font-family: "CinemaB", sans-serif;
  font-size: 16px;
  color: #000;
`;

const PhotoButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  margin: 0 auto;
`;

const SetProfile = () => {
  const [inputValue, setInputValue] = useState(""); // 입력된 값 상태
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 표시 여부 상태
  const [isSuccess, setIsSuccess] = useState(false); // 성공 여부 상태
  const [isProfileSelected, setIsProfileSelected] = useState(false);

  const handleInputChange = (e) => {
    setIsModalVisible(false); //입력값 변경 시 모달 숨김
    setInputValue(e.target.value);
  };

  // CheckButton 클릭 시 모달 표시, 성공 여부에 따라 다른 이미지 표시
  const handleCheckButtonClick = () => {
    // 여기에서 닉네임 중복 확인 로직을 구현하고, isSuccess 값을 설정
    // 예를 들어, 닉네임 중복 여부를 확인하고 isSuccess를 true 또는 false로 설정
    // 모달 표시
    setIsModalVisible(true);

    // isSuccess 값에 따라 모달 이미지 설정
    if (isSuccess) {
      setIsSuccess(false);
    } else {
      setIsSuccess(true);
    }
  };

  const handleKeyPress = (e) => {
    // 수정: 띄어쓰기 방지
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const isCheckButtonEnabled =
    inputValue.trim() !== "" &&
    inputValue.length >= 1 &&
    inputValue.length <= 10 &&
    !inputValue.includes(" ");

  const handleImageUpload = (e) => {
    // 이미지 업로드 로직
    setIsProfileSelected(true); // 프로필 선택 완료로 설정
  };

  const handleStartButtonClick = () => {
    if (inputValue.trim() !== "" && isProfileSelected) {
      // 필수 조건이 충족된 경우에만 작동
      // start 버튼에 필수 조건이 충족되지 않으면 클릭해도 아무 작업이 수행되지 않습니다.
      // 여기에서 '올해의 마이 어워즈 시작' 작업 수행
    }
  };

  return (
    <div id="setprofile">
      <Logo />
      <p id="title">
        사용하실 닉네임을 적어주세요!
        <img id="bell" src="images/bell.png" alt="bell" />
      </p>
      <InputContainer>
        <Input
          type="text"
          placeholder="닉네임(10자 내외)"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // 수정: 띄어쓰기 방지
          maxLength={10} // 수정: 최대 길이 10
        />
      </InputContainer>
      <p id="notice">한글, 영어, 숫자, 특수문자 사용가능/띄어쓰기 불가</p>
      <CheckButton
        onClick={handleCheckButtonClick}
        isButtonEnabled={isCheckButtonEnabled}
      />
      <CheckModal show={isModalVisible} isSuccess={isSuccess} />
      <p id="title">프로필 사진을 추가해보세요!</p>
      <PhotoButton htmlFor="fileInput">
        <img id="photo" src="images/addphoto.png" alt="photo" />
      </PhotoButton>
      <p id="paragragh">
        '올해의 마이 어워즈 2023'을 이용해 주셔서 감사합니다.
        <br />
        올해의 추억을 돌아보는 과정 속에서 여러분들의 입가에
        <br />
        미소를 띄울 수 있는 서비스가 되었으면 좋겠습니다.
        <br />
        <br />올 한해 고생 많으셨습니다. 내년은 더 행복하세요:)
      </p>
      <img id="letter" src="images/letter.png" alt="letter" />
      <StartButton
        isEnabled={inputValue.trim() !== "" && isProfileSelected}
        onClick={handleStartButtonClick}
      />
    </div>
  );
};

export default SetProfile;
