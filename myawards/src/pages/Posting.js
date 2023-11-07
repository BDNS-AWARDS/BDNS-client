import React, { useState } from "react";
import "../css/Posting.css";
import Logo from "../components/Logo";
import styled from "styled-components";
import "../css/fonts/font.css";
import CustomFileInputButton from "../components/CustomFileInputButton";
import TagBar from "../components/TagBar";
import HashTag from "../components/HashTag";

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
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [postImage, setPostImage] = useState("post_off.png");
  const [tagBarVisible, setTagBarVisible] = useState(false);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    if (newTitle && contents) {
      setPostImage("post_on.png");
    } else {
      setPostImage("post_off.png");
    }
  };

  const handleContentsChange = (e) => {
    const newContents = e.target.value;
    setContents(newContents);

    if (title && newContents) {
      setPostImage("post_on.png");
    } else {
      setPostImage("post_off.png");
    }
  };

  const toggleTagBar = () => {
    setTagBarVisible(!tagBarVisible);
  };

  const [selectedTag, setSelectedTag] = useState(0);

  const handleTagClick = (tagnum) => {
    setSelectedTag(tagnum); // 선택한 해시태그의 tagnum을 업데이트
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

        <div id="posting_hashtag" onClick={toggleTagBar}>
          <HashTag id="post_hastag_component" tagnum={0} />
          <span id="post_hashtag_span">부문</span>
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
      <div id="posting_tagbar" className={tagBarVisible ? "visible" : "hidden"}>
        <TagBar onTagClick={handleTagClick} />
      </div>
    </div>
  );
};

export default Posting;
