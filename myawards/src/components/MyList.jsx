import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "../css/fonts/font.css";
import HashTag from "./HashTag";

const StyledList = styled.div`
  background-color: #f7cc44;
  width: 85%;
  height: 30px;
  border-radius: 10px;
  margin-left: 30px;
  margin-bottom: 15px;
  display: flex;
  padding-top: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SantokkiSpan = styled.span`
  font-family: "Santokki";
  font-size: 14px;
  color: #8a0b0b;
`;

const CinemaMSpan = styled.span`
  font-family: "CinemaM";
  font-size: 14px;
  color: #000000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MyList = () => {
  const [user_posts, setUser_posts] = useState([]);

  const handleListClick = (postId) => {
    console.log("클릭한 요소의 post.id:", postId);
    window.location = `/myaward/${postId}`;
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/mypage")
      .then((response) => {
        const { user_posts } = response.data;
        setUser_posts(user_posts);
        
      })
      .catch((error) => {
        console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      });
  }, []);

  return (
    <>
      {user_posts.map((userpost) => (
        <StyledList onClick={() => handleListClick(userpost.id)}>
          <HashTag tagnum={userpost.hashtag} />
          <div style={{ position: "relative", display: "inline-block" }}>
            <SantokkiSpan>수상 제목 : </SantokkiSpan>
            <CinemaMSpan>{userpost.title}</CinemaMSpan>
          </div>
        </StyledList>
      ))}
    </>
  );
};

export default MyList;
