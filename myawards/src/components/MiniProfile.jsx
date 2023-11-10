import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import API from "../api/api";

const Nickname = styled.p`
  font-family: "CinemaM";
  color: #ffffff;
  font-size: 16px;
  display: inline-block;
  margin-left: 5px;
  padding-bottom: 20px;
`;

const PIContainer = styled.div`
  width: 31px;
  height: 31px;
  margin-top: 8px;
  display: inline-block;
  border-radius: 15px;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MiniProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const MiniProfile = () => {
  const [userPostInfo, setUserPostInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await API.get(`/api/mypage`);
        console.log(response.data);
        setUserInfo(response.data.user_info);
        setUserPostInfo(response.data.user_posts);
      } catch (error) {
        console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div>
      <Link to="/editprofile">
        <MiniProfileDiv>
          <PIContainer>
            <ProfileImg
              src={
                userInfo.profile_image ? "http://15.164.160.92"+`${userInfo.profile_image}`:
                process.env.PUBLIC_URL + "/images/profile.png"
              }
              alt="프로필 사진"
            />
          </PIContainer>
          {userPostInfo
            .filter((userPostInfo) => userPostInfo.id === 0)
            .map((userPostInfo) => (
              <Nickname>{userPostInfo.nickname}</Nickname>
            ))}
        </MiniProfileDiv>
      </Link>
    </div>
  );
};

export default MiniProfile;
