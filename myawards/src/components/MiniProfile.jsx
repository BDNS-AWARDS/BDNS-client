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
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await API.get(`/api/user/posts`);
        setUserInfo(response.data);
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
                userInfo.profilePicture ||
                process.env.PUBLIC_URL + "/images/profile.png"
              }
              alt="프로필 사진"
            />
          </PIContainer>
          {userInfo
            .filter((userInfo) => userInfo.id === 0)
            .map((userInfo) => (
              <Nickname>{userInfo.nickname}</Nickname>
            ))}
        </MiniProfileDiv>
      </Link>
    </div>
  );
};

export default MiniProfile;
