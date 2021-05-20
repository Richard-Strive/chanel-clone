import React from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Header() {
  return (
    <>
      <TopHeader>
        <ChanelLogo>
          <h1>Chanel</h1>
        </ChanelLogo>
        <ChanelIcons>
          <RiSearchLine />
          <BiUser />
          <BsStar />
          <HiOutlineShoppingBag />
        </ChanelIcons>
      </TopHeader>
      <BottomHeader>
        <MainLinks>
          <a href>HAUTE COUTURE</a>
          <a href>FASHION</a>
          <a href>HIGH JEWELLERY</a>
          <a href>FINE JEWELLERY</a>
          <a href>WATCHES</a>
          <a href>EYEWEAR</a>
          <a href>FRAGRANCE</a>
          <a href>MAKEUP</a>
          <a href>SKINCARE</a>
        </MainLinks>
        <AboutLink>
          <a href>ABOUT CHANEL</a>
        </AboutLink>
      </BottomHeader>
    </>
  );
}

export default Header;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  /* background-color: white; */
  background-color: yellow;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top: 8px solid black;
    width: 100vw;
  }

  @media (max-width: 781px) {
    background-color: darkkhaki;
    display: flex;
    justify-content: center;
  }
`;

const ChanelLogo = styled.div`
  background-color: red;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const MainLinks = styled.div`
  margin-left: 10px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AboutLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 10%;

  a {
    margin-left: -11px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 62px;
  width: 100vw;

  transform: translateY(77px);

  a {
    font-size: 12px;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 781px) {
    display: none;
  }
`;

const ChanelIcons = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  width: 100px;
  svg:hover {
    cursor: pointer;
  }

  // smartphones
  /* @media only screen and (min-width: 481px) and (max-width: 781px) {
  } */
  //tablet's and ipad
`;

const TableMenuSearch = styled.div``;
