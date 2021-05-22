import React, { useState } from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiQuestionnaireLine } from "react-icons/ri";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const RightArrow = styled(BiChevronRight)``;
const Question = styled(RiQuestionnaireLine)``;
const Position = styled(HiOutlineLocationMarker)``;
const Search = styled(RiSearchLine)``;
const User = styled(BiUser)``;
const Star = styled(BsStar)``;
const Shopping = styled(HiOutlineShoppingBag)``;
const Close = styled(CloseIcon)`
  position: absolute;
  right: 1%;
  top: 1%;
`;
const Menu = styled(MenuIcon)``;

function Header() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <Container>
      <BurgerSideMenuBg show={openSideMenu} />
      <BurgerSideMenu show={openSideMenu}>
        <Close onClick={() => setOpenSideMenu(false)} />
        <ul>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            FASHION <RightArrow />
          </li>
          <li>
            HIGH JEWELLERY <RightArrow />
          </li>
          <li>
            FINE JEWELLERY <RightArrow />
          </li>
          <li>
            WATCHES <RightArrow />
          </li>
        </ul>

        <ul>
          <li>Shop online</li>
          <li>
            EYEWEAR <RightArrow />
          </li>
          <li>
            FRAGRANCE <RightArrow />
          </li>
          <li>
            MAKEUP <RightArrow />
          </li>
          <li>
            SKINCARE <RightArrow />
          </li>
        </ul>

        <ul>
          <li>
            ABOUT CHANEL
            <RightArrow />
          </li>
        </ul>

        <ul>
          <li>
            My Account <User />
          </li>
          <li>
            Find a store <Position />
          </li>
          <li>
            Customer Service <Question />
          </li>
        </ul>
      </BurgerSideMenu>

      <TopHeader>
        <TableMenuSearch>
          <Menu onClick={() => setOpenSideMenu(true)} />
          <Search />
        </TableMenuSearch>
        <ChanelLogo>
          <h1>CHANEL</h1>
        </ChanelLogo>
        <ChanelIcons>
          <Search />
          <User />
          <Star />
          <Shopping />
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
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 140px;

  @media (max-width: 768px) {
    height: 78px;
  }
`;

const BurgerSideMenuBg = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const BurgerSideMenu = styled.div`
  position: absolute;
  left: 0;
  z-index: 10;

  height: 100vh;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 250ms ease-in-out;
  background-color: white;

  /* @media only screen and (min-width: 320px) and (max-width: 480px) {
  } */

  @media (max-width: 768px) {
    width: 330px;
  }

  ul {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
    margin-left: -20px;
  }

  li {
    padding: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    width: 100%;
  }

  ul:nth-of-type(3) {
    margin-top: 130px;
  }

  ul:nth-of-type(4) {
    background-color: #f6f6f6;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20px;
    li {
      font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      font-weight: 100;
      width: 100%;
    }
  }

  ul:nth-of-type(2) {
    li:nth-of-type(1) {
      font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
      color: #333;
      font-size: 14px;
      font-weight: 100;
    }
  }

  @media (max-width: 480px) {
    width: 90% !important;
  }
`;

const TableMenuSearch = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(30%);

  ${Search},${Menu} {
    cursor: pointer;
  }
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: white;

  //smartphone breakpoints range
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: space-between !important;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top: 8px solid black;
    width: 100vw;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  ${TableMenuSearch} {
    display: none;

    // from small screens like smartphones till tables
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const ChanelLogo = styled.div`
  h1 {
    padding-top: 25px;
    font-size: 2.7vw;
    font-weight: 600;
    letter-spacing: 5px;

    @media (max-width: 768px) {
      padding-top: 0 !important;
    }
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
  background-color: white;
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
  position: absolute;
  display: flex;
  right: 2%;
  justify-content: space-between;
  font-size: 17px;
  width: 100px;

  transform: translateX(-30%);

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 50px;
  }

  @media (max-width: 768px) {
    position: static;
    display: flex;
    justify-content: space-around;
    transform: translateX(-10%);
  }

  ${Search}, ${Star}, ${Shopping}, ${User} {
    cursor: pointer;
  }

  ${User}, ${Search} {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
