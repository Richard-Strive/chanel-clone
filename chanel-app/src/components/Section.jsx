import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { MdMyLocation } from "react-icons/md";
import { withStyles } from "@material-ui/core/styles";
import { RiSearchLine } from "react-icons/ri";

const MoreInInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#767676",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& ": {
      width: "80%",
      // background: "yellow",
    },
    "& .MuiInputLabel-formControl": {
      fontFamily: "Helvetica",
      fontWeight: 100,
      fontSize: "14px",
    },
  },
})(TextField);

function Section({ query, type, last, h1, small }) {
  const [isMounted, setIsMounted] = useState(false);
  let bg = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      let velocity = 0.06;
      bg.current.style.transform = `translateY(${value * velocity + "px"})`;
    });
    setIsMounted(true);
    console.log(window);
  }, []);

  return (
    <Content style={{ opacity: `${isMounted && "1"}` }} last={last}>
      <img
        src={`https://source.unsplash.com/1600x1600/?${query}`}
        alt="modal"
        ref={bg}
      />
      <TextContainer style={{ marginBottom: `${last ? "6%" : ""}` }}>
        <small>{small}</small>
        <h1>{h1}</h1>
        <TextContainerBtn type={type}>SEE MORE</TextContainerBtn>
      </TextContainer>

      {last && (
        <ChanelMoreInfo>
          <Contact>
            <small>CONTACT CHANEL</small>
            <p>
              CHANEL advisors are available to answer all of your questions.
            </p>
            <p>
              <u>Client Care</u>
            </p>
          </Contact>
          <FindStore>
            <small>FIND A STORE</small>
            <p>Enter a location to find the closest CHANEL stores</p>
            <MaterialUiInput>
              <MoreInInput
                id="custom-css-standard-input"
                label="Search by town, city or postcode"
              />
              <SearchIcon />
              <VR />
              <PositionIcon />
            </MaterialUiInput>
          </FindStore>
          <NewsLetter>
            <small>NEWSLETTER</small>
            <p>Subscribe to receive the latest news from CHANEL</p>
            <input
              type="text"
              placeholder="this is a placeholder for the cooler input with the 'ok' "
            />
          </NewsLetter>
        </ChanelMoreInfo>
      )}
    </Content>
  );
}

export default Section;

const handleBtnStyle = (type) => {
  switch (type) {
    case "TB":
      return "color:black; background:transparent; border: 1px solid black;";

    case "TW":
      return "color:white; background: transparent; border:1px solid white;";

    case "W":
      return "color:black; background: white;";

    case "B":
      return "color:white; background: black;";

    default:
      break;
  }
};

const handleUnderline = (type) => {
  if (type === "TB" || type === "W") {
    return "border-bottom: 1px solid black;";
  } else {
    return "border-bottom: 1px solid white;";
  }
};

const Content = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  height: ${(props) => (props.last ? "100vh" : "70vh")};
  opacity: 0.1;
  transition: opacity 4s;
  color: white;

  small,
  h1 {
    text-transform: uppercase;
  }

  img {
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  text-align: center;
`;

const TextContainerBtn = styled.div`
  position: relative;
  width: 123px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;

  ${(props) => handleBtnStyle(props.type)}

  &:before {
    position: absolute;
    content: "";
    ${(props) => handleUnderline(props.type)}
    bottom: 1.5vh;
    width: 5.1vw;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  &:hover:before {
    opacity: 10;
  }
`;

const ChanelMoreInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35vh;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #333;
  font-size: 14px;
  font-weight: 100;
`;

const Contact = styled.div`
  width: 25%;
  height: 60%;

  small {
    font-size: 12px;
    font-weight: 600;
  }
  p {
    font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
  }

  p:first-of-type {
    color: #767676;
  }
`;

const FindStore = styled(Contact)`
  position: relative;
`;
const NewsLetter = styled(Contact)``;

const SearchIcon = styled(RiSearchLine)`
  position: absolute;
  font-size: 20px;
  bottom: 8px;
  right: 70px;
  cursor: pointer;
`;

const MaterialUiInput = styled.div`
  position: relative;
`;

const PositionIcon = styled(MdMyLocation)`
  position: absolute;
  font-size: 20px;
  right: 0;
  bottom: 8px;
  cursor: pointer;
`;

const VR = styled.div`
  border-left: 1px solid #d8d8d8;
  height: 23px;
  position: absolute;
  bottom: 7px;
  right: 42px;
`;
