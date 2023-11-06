import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Nickname = styled.p`
  font-family: "CinemaM";
  color: #ffffff;
  font-size: 15px;
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
  const [userInfo, setUserInfo] = useState([]); // 객체로 초기화

  useEffect(() => {
    axios
      .get("http://localhost:8000/userInfo")
      .then((response) => {
        setUserInfo(response.data); // 배열의 첫 번째 요소를 가져옴
      })
      .catch((error) => {
        console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      });
  }, []);

  return (
    <div>
      <MiniProfileDiv>
        <PIContainer>
          <ProfileImg
            src={
              userInfo.profilePicture ||
              process.env.PUBLIC_URL + "./images/profile.png"
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
    </div>
  );
};

export default MiniProfile;