import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../css/fonts/font.css";
import axios from "axios";
import HashTag from "./HashTag";

const TagBarDiv = styled.div`
  width: 100%;
  height: 300px;
  background-color: #69320a;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

const TagBar = () => {
  const [hashtag, setHashtag] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/hashtag").then((response) => {
      setHashtag(response.data);
    });
  }, []);

  return (
    <div>
      <TagBarDiv>{/* <HashTag /> */}</TagBarDiv>
    </div>
  );
};

export default TagBar;
