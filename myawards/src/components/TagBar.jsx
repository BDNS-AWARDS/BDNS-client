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
  justify-content: center;
`;

const TagBar = () => {
  const handleTagClick = (tagnum) => {
    console.log(`Clicked tagnum: ${tagnum}`);
  };

  return (
    <TagBarDiv media>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
        }}
      >
        <HashTag tagnum={1} onClick={() => handleTagClick(1)} />
        <HashTag tagnum={2} onClick={() => handleTagClick(2)} />
        <HashTag tagnum={3} onClick={() => handleTagClick(3)} />
        <HashTag tagnum={4} onClick={() => handleTagClick(4)} />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <HashTag tagnum={5} onClick={() => handleTagClick(5)} />
        <HashTag tagnum={6} onClick={() => handleTagClick(6)} />
        <HashTag tagnum={7} onClick={() => handleTagClick(7)} />
        <HashTag tagnum={8} onClick={() => handleTagClick(8)} />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <HashTag tagnum={9} onClick={() => handleTagClick(9)} />
        <HashTag tagnum={10} onClick={() => handleTagClick(10)} />
        <HashTag tagnum={11} onClick={() => handleTagClick(11)} />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <HashTag tagnum={12} onClick={() => handleTagClick(12)} />
        <HashTag tagnum={13} onClick={() => handleTagClick(13)} />
        <HashTag tagnum={14} onClick={() => handleTagClick(14)} />
        <HashTag tagnum={15} onClick={() => handleTagClick(15)} />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <HashTag tagnum={16} onClick={() => handleTagClick(16)} />
        <HashTag tagnum={17} onClick={() => handleTagClick(17)} />
        <HashTag tagnum={18} onClick={() => handleTagClick(18)} />
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "25px",
        }}
      >
        <HashTag tagnum={19} onClick={() => handleTagClick(19)} />
        <HashTag tagnum={20} onClick={() => handleTagClick(20)} />
        <HashTag tagnum={21} onClick={() => handleTagClick(21)} />
        <HashTag tagnum={22} onClick={() => handleTagClick(22)} />
      </div>
    </TagBarDiv>
  );
};

export default TagBar;
