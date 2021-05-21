import React from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const RightArrow = styled(BiChevronRight)``;
const Search = styled(RiSearchLine)``;
const User = styled(BiUser)``;
const Star = styled(BsStar)``;
const Shopping = styled(HiOutlineShoppingBag)``;
const Close = styled(CloseIcon)`
  background-color: green;
  position: absolute;
  right: 1%;
  top: 1%;
`;
const Menu = styled(MenuIcon)``;

function Header() {
  return (
    <>
      <BurgerSideMenu>
        <Close />
        <ul>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
        </ul>

        <ul>
          <li>Shop online</li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
          <li>
            HAUTE COUTURE <RightArrow />
          </li>
        </ul>

        <ul>
          <li>
            ABOUT CHANEL
            <RightArrow />
          </li>
        </ul>
      </BurgerSideMenu>
      <TopHeader>
        <TableMenuSearch>
          <Menu />
          <Search />
        </TableMenuSearch>
        <ChanelLogo>
          <h1>Chanel</h1>
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
    </>
  );
}

export default Header;

const BurgerSideMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 50%;

  ul {
    margin-top: 50px;
  }

  ul:nth-of-type(3) {
    margin-top: 130px;
  }
  li {
    padding: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    background-color: slategrey;
    width: 90%;
  }

  background-color: salmon;
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
    font-size: 2.5vw;
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
