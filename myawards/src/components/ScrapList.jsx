import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "../css/fonts/font.css";
import HashTag from "./HashTag";
import API from "../api/api";

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
`;

const ScrapList = () => {
  const [user_scraps, setUser_scraps] = useState([]);
  const [postId, setPostId] = useState(null);
  
  const handleListClick = (scrapId) => {
    console.log("클릭한 요소의 scrap.id:", scrapId);
    window.location = `/myscrap/${scrapId}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/mypage");
        
        setUser_scraps(response.data.user_scraps);
      } catch (error) {
        console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {user_scraps.map((userscrap) => (
        <StyledList onClick={() => handleListClick(userscrap.id)}>
          <HashTag tagnum={userscrap.hashtag} />
          <div style={{ position: "relative", display: "inline-block" }}>
            <SantokkiSpan>수상 제목 : </SantokkiSpan>
            <CinemaMSpan>{userscrap.post_title}</CinemaMSpan>
          </div>
        </StyledList>
      ))}
    </>
  );
};

export default ScrapList;
