import React, { useState, useEffect } from "react";
import "../css/MainPage.css";
import Logo from "../components/Logo";
import "../css/fonts/font.css";
import TagBar from "../components/TagBar";
import HashTag from "../components/HashTag";
import MainPost from "../components/MainPost";
import NavBar from "../components/NavBar";
import axios from "axios";

function MainPage({ tagnum }) {
  const [hashtag, setHashtag] = useState([]);
  const [tagBarVisible, setTagBarVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState(1);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hashtag", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // 쿠키사용
      })
      .then((response) => {
        setCategories(
          response.data.categories.filter(
            (categories) => categories.id === tagnum
          )
        );
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

  const handleTagClick = (tagnum) => {
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
      <div id="main_navbar_div">
        <NavBar />
      </div>
    </div>
  );
}

export default MainPage;
