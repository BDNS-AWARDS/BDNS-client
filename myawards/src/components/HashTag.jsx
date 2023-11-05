import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../css/fonts/font.css";
import axios from "axios";

const HashTagDiv = styled.div`
  background-color: #ffffff;
  border: 0.01cm solid black;
  border-radius: 15px;
  padding: 0px 5px;
  width: auto;
  height: 24px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin: 0px 5px;
`;

const HashTagP = styled.p`
  font-family: "CinemaL";
  font-size: 14px;
  color: black;
  -webkit-text-stroke: 0.01cm black;
  margin-top: 4px;
  margin-right: 3px;
`;

const HashTag = ({ tagnum }) => {
  const [hashtag, setHashtag] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/hashtag").then((response) => {
      setHashtag(response.data.filter((tag) => tag.id === tagnum));
    });
  }, [tagnum]);

  return (
    <div>
      <HashTagDiv>
        {hashtag.map((tag) => (
          <HashTagP key={tag.id}>{tag.tagname}</HashTagP>
        ))}
      </HashTagDiv>
    </div>
  );
};

export default HashTag;
