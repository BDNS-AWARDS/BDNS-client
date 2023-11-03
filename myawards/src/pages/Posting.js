import React from "react";
import "../css/Posting.css";
import Logo from "../components/Logo";
import styled from "styled-components";
import "../css/fonts/font.css";

const StyledTxt = styled.p`
  color: #8a0b0b;
  font-family: "Santokki";
  font-size: 20px;
  display: inline-block;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 26px;
  height: 26px;
  display: inline-block;
  padding-left: 5px;
  margin-bottom: -8px;
`;

const Posting = () => {
  return (
    <div id="posting_container">
      <br />
      <Logo />
      <div id="posting_box">
        <div id="posting_title">
          <StyledTxt>올해의 마이 어워즈</StyledTxt>
          <StyledImg src={process.env.PUBLIC_URL + "./images/medal.png"} />
        </div>
        <div id="posting_hashtag">
          {/* <Hashtag /> */}
          <p>부문</p>
        </div>
        <form id="posting_form">
          <label for="#input_title">수상 제목 :</label>
          <input
            type="text"
            id="input_title"
            placeholder="제목을 입력해주세요. (20자 내외)"
          />
          <br />
          <label for="#input_contents" id="label_textarea">
            내용 :
          </label>
          <div id="textarea_div">
            <textarea
              id="input_contents"
              placeholder="내용을 입력해주세요. (300자 내외)"
              rows="11"
            />
          </div>
          <br />
          <label for="#input_photo">사진 첨부</label>
          <input id="input_photo" type="file" />
        </form>
      </div>
      <p id="posting_congrats">수상을 축하합니다!</p>
      <img
        id="posting_btn"
        src={process.env.PUBLIC_URL + "./images/post1.png"}
        alt="등록버튼 비활성화"
      />
    </div>
  );
};

export default Posting;
