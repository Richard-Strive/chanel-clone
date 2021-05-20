import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <TopHeader>
        <h1>Chanel</h1>
      </TopHeader>
      <BottomHeader>
        <a href>HAUTE COUTURE</a>
        <a href>FASHION</a>
        <a href>HIGH JEWELLERY</a>
        <a href>FINE JEWELLERY</a>
        <a href>WATCHES</a>
        <a href>EYEWEAR</a>
        <a href>FRAGRANCE</a>
        <a href>MAKEUP</a>
        <a href>SKINCARE</a>
        <a href>ABOUT CHANEL</a>
      </BottomHeader>
    </>
  );
}

export default Header;

const TopHeader = styled.div`
  height: 78px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: red;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    border-top: 6px solid black;
    width: 100;
  }
`;

const BottomHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 62px;
  width: 100vw;
  transform: translateY(77px);
  background-color: yellow;
  /* padding: 0 20px; */

  a {
    font-size: 12px;
    font-weight: 600;
  }
`;
