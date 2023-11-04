import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../css/fonts/font.css";
import axios from "axios";

const HashTagDiv = styled.div`
  background-color: #ffffff;
  border: 0.01cm solid black;
  border-radius: 15px;
  padding: 0px 10px;
  height: 26px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HashTagP = styled.p`
  font-family: "CinemaL";
  font-size: 15px;
  color: black;
  -webkit-text-stroke: 0.01cm black;
`;

const HashTag = () => {
  const [hashtag, setHashtag] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/hashtag").then((response) => {
      setHashtag(response.data);
    });
  }, []);
  return (
    <div>
      <HashTagDiv>
        {hashtag
          .filter((hashtag) => hashtag.id === 0)
          .map((hashtag) => (
            <HashTagP>{hashtag.tagname}</HashTagP>
          ))}
      </HashTagDiv>
    </div>
  );
};

export default HashTag;
