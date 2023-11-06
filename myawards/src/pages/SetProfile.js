import React, { useState } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import "../css/SetProfile.css";
import styled from "styled-components";
import CheckButton from "../components/CheckButton";
import CheckModal from "../components/CheckModal";
import StartButton from "../components/StartButton";

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
    setIsModalVisible(false); // 입력값 변경 시 모달 숨김
    setInputValue(e.target.value);
  };

  // CheckButton 클릭 시 모달 표시, 성공 여부에 따라 다른 이미지 표시
  const handleCheckButtonClick = async () => {
    // 여기에서 닉네임 중복 확인 로직을 구현
    try {
      // 예를 들어, 서버에서 닉네임 중복을 확인하는 요청을 보냅니다.
      const response = await axios.post("서버의 API 엔드포인트 URL", {
        nickname: inputValue,
      });

      if (response.data.isDuplicate) {
        // 중복된 경우
        setIsSuccess(false);
      } else {
        // 중복이 아닌 경우
        setIsSuccess(true);
      }
    } catch (error) {
      // 오류 처리
      console.error("서버 요청 오류:", error);
    }

    // 모달 표시
    setIsModalVisible(true);
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

  const handleImageUpload = () => {
    // 파일 선택 input 클릭
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleFileInputChange = (e) => {
    const selectedImage = e.target.files[0]; // 선택된 이미지 파일

    // 이미지를 화면에 미리 보여주는 코드
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // 선택된 이미지를 미리 보여줄 이미지 요소에 설정
        const photoImage = document.getElementById("photo");
        photoImage.src = e.target.result;

        // 프로필 선택 완료로 설정
        setIsProfileSelected(true);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleStartButtonClick = () => {
    if (inputValue.trim() !== "" && isProfileSelected && isSuccess) {
      // 필수 조건이 충족된 경우에만 작동
      // start 버튼에 필수 조건이 충족되지 않으면 클릭해도 아무 작업이 수행되지 않습니다.
      // 여기에서 '올해의 마이 어워즈 시작' 작업 수행
    }
  };

  return (
    <div id="setprofile">
      <Logo />
      <p id="content">
        사용하실 닉네임을 적어주세요!
        <img id="bell" src="images/bell.png" alt="bell" />
      </p>
      <div id="inputbox">
        <input
          id="input"
          type="text"
          placeholder="닉네임(10자 내외)"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // 수정: 띄어쓰기 방지
          maxLength={10} // 수정: 최대 길이 10
        />
      </div>
      <p id="notice">한글, 영어, 숫자, 특수문자 사용가능/띄어쓰기 불가</p>
      <CheckButton
        onClick={handleCheckButtonClick}
        isButtonEnabled={isCheckButtonEnabled}
      />
      <CheckModal show={isModalVisible} isSuccess={isSuccess} />
      <p id="content">프로필 사진을 추가해보세요!</p>
      <div itemID="inputbox">
        <input
          type="file" // 파일 선택 input으로 변경
          id="fileInput"
          accept="image/*"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
        />
        <PhotoButton onClick={handleImageUpload}>
          <img id="photo" src="images/addphoto.png" alt="photo" />
        </PhotoButton>
      </div>
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
        isEnabled={inputValue.trim() !== "" && isProfileSelected && isSuccess}
        onClick={handleStartButtonClick}
      />
    </div>
  );
};

export default SetProfile;
