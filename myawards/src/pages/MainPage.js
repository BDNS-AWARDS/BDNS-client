import React, { useState, useEffect } from "react";
import "../css/MainPage.css";
import Logo from "../components/Logo";
import styled from "styled-components";
import "../css/fonts/font.css";
import TagBar from "../components/TagBar";
import HashTag from "../components/HashTag";
import MainPost from "../components/MainPost";
import NavBar from "../components/NavBar";
import axios from "axios";

function MainPage({ tagnum }) {
  const [hashtag, setHashtag] = useState([]);
  const [tagBarVisible, setTagBarVisible] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/hashtag").then((response) => {
      setHashtag(response.data.filter((tag) => tag.id === tagnum));
    });
  }, [tagnum]);

  const toggleTagBar = () => {
    setTagBarVisible(true);
  };

  const TagBarClick = () => {
    if (tagBarVisible) {
      setTagBarVisible(false);
    }
  };

  //해시태그 부모-자식 연결 부분
  const [selectedTag, setSelectedTag] = useState(1);

  const handleTagClick = (tagnum) => {
    //해시태그 부모-자식 연결 함수!!!!
    setSelectedTag(tagnum);
    console.log(tagnum);
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
        <HashTag tagnum={selectedTag} />
      </div>
      <div id="main_post_div">
        <MainPost />
      </div>
      <div
        id="main_tagbar"
        className={tagBarVisible ? "visible" : "hidden"}
        onClick={TagBarClick}
      >
        <TagBar handleTagClick={handleTagClick} />
      </div>
      <NavBar />
    </div>
  );
}

export default MainPage;
