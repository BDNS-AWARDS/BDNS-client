import React, { useState } from "react";
import "../css/MainPage.css";
import Logo from "../components/Logo";
import styled from "styled-components";
import "../css/fonts/font.css";
import TagBar from "../components/TagBar";
import HashTag from "../components/HashTag";
import MainPost from "../components/MainPost";

function MainPage(props) {
  const [tagBarVisible, setTagBarVisible] = useState(false);

  const toggleTagBar = () => {
    setTagBarVisible(!tagBarVisible);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "./images/main_bg.png"
        })`,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Logo style={{ display: "inline" }} />
      <div id="main_hashtag" onClick={toggleTagBar}>
        <HashTag tagnum={1} />
      </div>
      <div id="main_post_div">
        <MainPost />
      </div>
      <div id="main_tagbar" className={tagBarVisible ? "visible" : "hidden"}>
        <TagBar />
      </div>
    </div>
  );
}

export default MainPage;
