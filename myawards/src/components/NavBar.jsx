import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarDiv = styled.div`
  background-color: #69320a;
  width: 100%;
  height: 112px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <>
      <NavBarDiv>
        <Link to="/gamestart">
          <img
            src={process.env.PUBLIC_URL + "/images/nav_game.png"}
            style={{
              width: "60px",
              height: "60px",
              marginLeft: "30px",
              marginTop: "25px",
            }}
          />
        </Link>
        <Link to="/posting">
          <img
            src={process.env.PUBLIC_URL + "/images/nav_post.png"}
            style={{
              width: "68px",
              height: "68px",
              marginTop: "20px",
              marginLeft: "5px",
            }}
          />
        </Link>
        <Link to="/mypage">
          <img
            src={process.env.PUBLIC_URL + "/images/nav_my.png"}
            style={{
              width: "80px",
              height: "80px",
              marginRight: "30px",
              marginTop: "15px",
            }}
          />
        </Link>
      </NavBarDiv>
    </>
  );
};

export default NavBar;
