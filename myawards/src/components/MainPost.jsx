import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import PostProfile from "./PostProfile";
import axios from "axios";
import HashTag from "../components/HashTag";

const PostBox = styled.div`
  margin-top: 15px;
  border-radius: 20px;
  background-color: #f7cc44;
  width: 85%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 10px 20px;
  font-family: "CinemaM";
`;

const Nickname = styled.p`
  font-family: "CinemaM";
  color: "#000000";
  font-size: 16px;
  display: block;
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: -10px;
`;

const PIContainer = styled.div`
  width: 31px;
  height: 31px;
  margin-top: 8px;
  display: inline-block;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PostProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: -15px;
`;

const MainPost = () => {
  const [postInfo, setPostInfo] = useState([]);

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
    <div
      style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "90vh" }}
    >
      {postInfo.map((post) => (
        <PostBox>
          <PostProfileDiv>
            <PIContainer>
              <ProfileImg
                src={
                  post.profilePicture ||
                  process.env.PUBLIC_URL + "./images/profile.png"
                }
                alt="프로필 사진"
              />
            </PIContainer>
            <div style={{ display: "inline-block" }}>
              <Nickname>{post.nickname}</Nickname>
              <p
                style={{
                  fontSize: "12px",
                  display: "block",
                  marginLeft: "5px",
                }}
              >
                {post.date}
              </p>
            </div>
          </PostProfileDiv>

          <div
            style={{
              display: "flex",
              position: "relative",
              top: "-35px",
              left: "65%",
              marginBottom: "-25px",
              gap: "3px",
            }}
          >
            <HashTag tagnum={post.hashtag} style={{ marginRight: "5px" }} />
            <img
              src={process.env.PUBLIC_URL + "./images/menubar.png"}
              style={{
                width: "20px",
                height: "20px",
                paddingTop: "3px",
                paddingLeft: "-4px",
              }}
            />
          </div>

          <div style={{ marginLeft: "30px" }}>
            <p style={{ fontSize: "16px" }}>{post.title}</p>
            <p style={{ fontSize: "12px" }}>{post.contents}</p>
          </div>
        </PostBox>
      ))}
    </div>
  );
};

export default MainPost;
