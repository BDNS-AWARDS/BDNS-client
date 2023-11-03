import React from "react";
import "../css/Posting.css";
import Logo from "../components/Logo";

const Posting = () => {
  return (
    <div id="posting_box">
      <Logo />
      <div id="posting_form">
        <p>올해의 마이 어워즈</p>
        <image src="" />
        {/* <Hashtag /> */}
        <p>부문</p>
        <form>
          수상 제목 :
          <input type="text" placeholder="제목을 입력해주세요. (20자 내외)" />
          내용 :
          <textarea placeholder="내용을 입력해주세요. (300자 내외)" />
          사진 첨부
          <input type="file" />
          <p>수상을 축하합니다!</p>
          <input type="button" />
        </form>
      </div>
    </div>
  );
};

export default Posting;
