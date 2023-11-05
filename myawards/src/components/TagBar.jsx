import React from "react";
import styled from "styled-components";
import HashTag from "./HashTag";

const TagBarDiv = styled.div`
  width: 100%;
  height: 320px;
  background-color: #69320a;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TagBar = () => {
  const numberOfHashTags = 23;

  const hashTags = [];

  for (let i = 1; i < numberOfHashTags; i++) {
    let line;

    switch (true) {
      case i >= 1 && i <= 4:
        line = 1;
        break;
      case i >= 5 && i <= 8:
        line = 2;
        break;
      case i >= 9 && i <= 11:
        line = 3;
        break;
      case i >= 12 && i <= 15:
        line = 4;
        break;
      case i >= 16 && i <= 19:
        line = 5;
        break;
      case i >= 20 && i <= 23:
        line = 6;
        break;
      default:
        line = 1;
    }

    hashTags.push(<HashTag key={i} tagnum={i} style={{ order: line }} />);
  }

  return (
    <TagBarDiv media>
      <div
        id="tagbar_arrange"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "25px 0",
        }}
      >
        {hashTags}
      </div>
    </TagBarDiv>
  );
};

export default TagBar;
