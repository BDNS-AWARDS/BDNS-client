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
  const [postInfo, setPostInfo] = useState([]);

  const handleListClick = (postId) => {
    console.log("클릭한 요소의 post.id:", postId);
    window.location = `/myaward/${postId}`;
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/postInfo")
      .then((response) => {
        setPostInfo(response.data);
      })
      .catch((error) => {
        console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      });
  }, []);

  return (
    <>
      {postInfo.map((post) => (
        <StyledList onClick={() => handleListClick(post.id)}>
          <HashTag tagnum={post.hashtag} />
          <div style={{ position: "relative", display: "inline-block" }}>
            <SantokkiSpan>수상 제목 : </SantokkiSpan>
            <CinemaMSpan>{post.title}</CinemaMSpan>
          </div>
        </StyledList>
      ))}
    </>
  );
};

export default MyList;
