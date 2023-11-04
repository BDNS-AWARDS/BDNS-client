import React, { useState } from "react";
import "../css/Posting.css";
import Logo from "../components/Logo";
import styled from "styled-components";
import "../css/fonts/font.css";
import CustomFileInputButton from "../components/CustomFileInputButton";
import TagBar from "../components/TagBar";

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
  const [title, setTitle] = useState(""); // 수상 제목
  const [contents, setContents] = useState(""); // 내용
  const [postImage, setPostImage] = useState("post1.png"); // 초기 이미지 설정

  // 수상 제목 입력 시 호출
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    // 수상 제목과 내용이 모두 입력되었을 때 이미지 변경
    if (newTitle && contents) {
      setPostImage("post2.png");
    } else {
      setPostImage("post1.png");
    }
  };

  // 내용 입력 시 호출
  const handleContentsChange = (e) => {
    const newContents = e.target.value;
    setContents(newContents);

    // 수상 제목과 내용이 모두 입력되었을 때 이미지 변경
    if (title && newContents) {
      setPostImage("post2.png");
    } else {
      setPostImage("post1.png");
    }
  };

  return (
    <div id="posting_container">
      <br />
      <Logo />

      <img
        id="decoration"
        src={process.env.PUBLIC_URL + "./images/decoration.png"}
        alt="deco"
      />
      <div id="posting_box">
        <div id="posting_title">
          <StyledTxt>올해의 마이 어워즈</StyledTxt>
          <StyledImg src={process.env.PUBLIC_URL + "./images/medal.png"} />
        </div>

        <div id="posting_hashtag">
          <p>부문</p>
        </div>

        <form id="posting_form">
          <label htmlFor="input_title">수상 제목 :</label>
          <input
            type="text"
            id="input_title"
            placeholder="제목을 입력해주세요. (20자 내외)"
            value={title}
            onChange={handleTitleChange}
          />
          <br />

          <label htmlFor="input_contents" id="label_textarea">
            내용 :
          </label>
          <div id="textarea_div">
            <textarea
              id="input_contents"
              placeholder="내용을 입력해주세요. (300자 내외)"
              rows="11"
              value={contents}
              onChange={handleContentsChange}
            />
          </div>
          <br />

          <CustomFileInputButton />
        </form>
      </div>

      <p id="posting_congrats">수상을 축하합니다!</p>
      <img
        id="posting_btn"
        src={process.env.PUBLIC_URL + `./images/${postImage}`}
        alt="등록버튼"
        onClick={() => {
          if (title && contents) {
            alert("제출되었습니다.");
          } else {
            alert("수상 제목과 내용을 모두 입력하세요.");
          }
        }}
      />
      <TagBar />
    </div>
  );
};

export default Posting;
