import React, { useState } from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiQuestionnaireLine } from "react-icons/ri";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";

const Question = styled(RiQuestionnaireLine)``;
const Position = styled(HiOutlineLocationMarker)``;
const Search = styled(RiSearchLine)``;
const User = styled(BiUser)``;
const Star = styled(BsStar)``;
const Shopping = styled(HiOutlineShoppingBag)``;
const RightArrow = styled(IoIosArrowForward)``;
const Close = styled(CloseIcon)`
  position: absolute;
  right: 1%;
  top: 1%;
`;
const Menu = styled(MenuIcon)``;

const disableScroll = () => {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

const enableScroll = () => {
  window.onscroll = function () {};
};

function Header() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openSideMenu2, setOpenSideMenu2] = useState(false);

  const dispatch = useDispatch();

  if (openSideMenu) {
    disableScroll();
  } else {
    enableScroll();
  }

  const openAccount = () => {
    dispatch({ type: "MODAL", payload: false });
    dispatch({ type: "ACCOUNT", payload: true });
  };
  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
    dispatch({ type: "ACCOUNT", payload: false });
  };

  const openWish = () => {
    dispatch({ type: "WISH", payload: true });
    dispatch({ type: "MODAL", payload: false });
    dispatch({ type: "ACCOUNT", payload: false });
  };

  return (
    <Container>
      <BurgerSideMenuBg show={openSideMenu} />
      <BurgerSideMenu show={openSideMenu}>
        <Close onClick={() => setOpenSideMenu(false)} />
        <ul>
          <li>HAUTE COUTURE</li>
          <li>FASHION</li>
          <li>HIGH JEWELLERY</li>
          <li>FINE JEWELLERY</li>
          <li>WATCHES</li>
        </ul>

        <ul>
          <li>Shop online</li>
          <li>EYEWEAR</li>
          <li>FRAGRANCE</li>
          <li>MAKEUP</li>
          <li>SKINCARE</li>
        </ul>

        <ul>
          <li>ABOUT CHANEL</li>
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

      <BurgerSideMenuBg2 show={openSideMenu2} />
      <BurgerSideMenu2 show={openSideMenu2}>
        <Close onClick={() => setOpenSideMenu2(false)} />
        <h1>SHOPPING BAG</h1>
        <small>Your bag is empty.</small>
        <h3>SHOP ONLINE</h3>
        <p>
          EYEWEAR <RightArrow />
        </p>
        <p>
          FRAGRANCE
          <RightArrow />
        </p>
        <p>
          MAKEUP
          <RightArrow />
        </p>
        <p>
          SKINCARE HOME
          <RightArrow />
        </p>
        <NeedMoreHelp>
          <h1>NEED HELP?</h1>
          <h3>CONTACT US</h3>

          <small>
            CHANEL advisors are available to answer all of your questions.
          </small>
          <br />
          <small>
            <u>Client care</u>
          </small>
        </NeedMoreHelp>
      </BurgerSideMenu2>
      <TopHeader>
        <TableMenuSearch>
          <Menu onClick={() => setOpenSideMenu(true)} />
          <Search />
        </TableMenuSearch>
        <ChanelLogo>
          <h1>CHANEL</h1>
        </ChanelLogo>
        <ChanelIcons>
          <Search onClick={() => openModal()} />
          <User onClick={() => openAccount()} />
          <Star onClick={() => openWish()} />
          <Shopping onClick={() => setOpenSideMenu2(true)} />
        </ChanelIcons>
      </TopHeader>
      <BottomHeader>
        <MainLinks>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            HAUTE COUTURE
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            FASHION
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            HIGH JEWELLERY
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            FINE JEWELLERY
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            WATCHES
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            EYEWEAR
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            FRAGRANCE
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            MAKEUP
          </a>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            SKINCARE
          </a>
        </MainLinks>
        <AboutLink>
          <a
            href
            onClick={() => dispatch({ type: "COMING_SOON", payload: true })}
          >
            ABOUT CHANEL
          </a>
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
  z-index: 100000000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;

  width: 100%; /* Full width */
  height: 100vh; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const BurgerSideMenuBg2 = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed; /* Stay in place */
  z-index: 100000000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;

  width: 100%; /* Full width */
  height: 100vh; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const BurgerSideMenu = styled.div`
  position: fixed;
  left: ${(props) => (props.show ? "0" : "-100%")};
  top: 0;
  z-index: 10000000000000000000000;
  height: 100vh;
  background-color: white;
  transition: left 280ms ease-in-out;
  @media (max-width: 768px) {
    width: 330px;
    height: 100% !important;
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

const NeedMoreHelp = styled.div`
  width: 65%;
  background-color: #f6f6f6;
  text-align: center;
`;

const BurgerSideMenu2 = styled.div`
  position: fixed;
  right: ${(props) => (props.show ? "0" : "-100%")};
  top: 0;
  z-index: 10000000000000000000000;
  height: 100vh;
  background-color: white;
  transition: right 280ms ease-in-out;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    display: flex;
    align-items: center;
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
  z-index: 1111;
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
  padding-top: 25px;
`;

const AboutLink = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  margin-bottom: 10px;

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
  color: #767676;

  width: 100px;
  bottom: 10px;
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
