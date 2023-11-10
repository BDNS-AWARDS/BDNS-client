import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../css/PostDetail.css";
import axios from "axios";
import HashTag from "../components/HashTag";
import API from "../api/api";

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
  const [postStates, setPostStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/board");
        setPostInfo(response.data);
        setPostStates(
          response.data.map(() => ({ likebtn: false, scrapbtn: false }))
        );
        console.log("버튼 눌림");
        // console.log(response.data);
      } catch (error) {
        console.error("사용자 정보를 가져오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, []);

  const handleLikeClick = async (index, postId) => {
    const updatedPostStates = [...postStates];
    updatedPostStates[index].likebtn = !updatedPostStates[index].likebtn;
    setPostStates(updatedPostStates);

    try {
      const response = await API.post(`/api/board/${postId}/like`, {
        post: postId, //변경하기
      });
      console.log("좋아요 요청이 성공했습니다.", response);
    } catch (error) {
      console.error("좋아요 요청 중 오류가 발생했습니다.", error);
    }
  };

  const handleUnlikeClick = async (index, postId) => {
    const updatedPostStates = [...postStates];
    updatedPostStates[index].likebtn = !updatedPostStates[index].likebtn;
    setPostStates(updatedPostStates);

    try {
      const response = await API.post(`/api/board/${postId}/like`, {
        post: postId, //변경하기
      });
      console.log("좋아요 취소 요청이 성공했습니다.", response);
    } catch (error) {
      console.error("좋아요 취소 요청 중 오류가 발생했습니다.", error);
    }
  };

  const handleScrapClick = async (index, postId) => {
    const updatedPostStates = [...postStates];
    updatedPostStates[index].scrapbtn = !updatedPostStates[index].scrapbtn;
    setPostStates(updatedPostStates);

    try {
      const response = await API.post(`/api/board/${postId}/scrap`, {
        post: postId,
      });
      console.log("스크랩 요청이 성공했습니다.", response);
    } catch (error) {
      console.error("스크랩 요청 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <div id="detail_box">
      {postInfo.map((post, index) => (
        <PostBox >
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
            <div id="detail_header">
              <Nickname>{post.nickname}</Nickname>
              <p id="detail_header_p">{post.date}</p>
            </div>
          </PostProfileDiv>

          <div id="detail_hashtag_div">
            <HashTag tagnum={post.category} />
            <img
              id="detail_menuimg"
              src={process.env.PUBLIC_URL + "./images/menubar.png"}
            />
          </div>

          <div id="detail_contentbox">
            <p id="detail_title">{post.title}</p>
            <p id="detail_contents">{post.content}</p>
            <div id="detail_imgcontainer">
              <img id="detail_photo1" src={post.photo1} />
              <img id="detail_photo2" src={post.photo2} />
            </div>
          </div>

          <div id="detail_btnbox">
            <img
              id="likebtn"
              src={
                postStates[index].likebtn
                  ? process.env.PUBLIC_URL + "./images/like_on.png"
                  : process.env.PUBLIC_URL + "./images/like_off.png"
              }
              onClick={() => handleLikeClick(index)}
            />
            <img
              id="scrapbtn"
              src={
                postStates[index].scrapbtn
                  ? process.env.PUBLIC_URL + "./images/scrap_on.png"
                  : process.env.PUBLIC_URL + "./images/scrap_off.png"
              }
              onClick={() => handleScrapClick(index)}
            />
          </div>
        </PostBox>
      ))}
    </div>
  );
};

export default MainPost;
