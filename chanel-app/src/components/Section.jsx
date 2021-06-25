import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { MdMyLocation } from "react-icons/md";
import { withStyles } from "@material-ui/core/styles";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { Parallax } from "react-parallax";

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
    },
    "& .MuiInputLabel-formControl": {
      fontFamily: "Helvetica",
      fontWeight: 100,
      fontSize: "14px",
    },
  },
})(TextField);

const MoreInput2 = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#767676",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& ": {
      width: "93%",
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
  const [contact, setContact] = useState(false);
  const [findStore, setFindStore] = useState(false);
  const [newsLetter, setNewsLetter] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Parallax
      blur={0}
      bgImage={`https://source.unsplash.com/1600x1600/?${query}`}
      bgImageAlt={`${query}`}
      strength={160}
    >
      <Content
        style={{
          opacity: `${isMounted && "1"}`,
        }}
        last={last}
      >
        <TextContainer style={{ marginBottom: `${last ? "6%" : ""}` }}>
          <small>{small}</small>
          <h1>{h1}</h1>
          <TextContainerBtn type={type}>SEE MORE</TextContainerBtn>
        </TextContainer>

        {last && (
          <ChanelMoreInfo>
            <Contact contact={contact}>
              <small>
                CONTACT CHANEL
                <DownArrow
                  onClick={() => setContact(!contact)}
                  style={{ transform: `${contact ? "rotateX(180deg)" : ""}` }}
                />
              </small>
              <p>
                CHANEL advisors are available to answer all of your questions.
              </p>
              <p>
                <u>Client Care</u>
              </p>
            </Contact>
            <FindStore findStore={findStore}>
              <small>
                FIND A STORE
                <DownArrow
                  onClick={() => setFindStore(!findStore)}
                  style={{ transform: `${findStore ? "rotateX(180deg)" : ""}` }}
                />
              </small>
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
            <NewsLetter newsLetter={newsLetter}>
              <small>
                NEWSLETTER
                <DownArrow
                  onClick={() => setNewsLetter(!newsLetter)}
                  style={{
                    transform: `${newsLetter ? "rotateX(180deg)" : ""}`,
                  }}
                />
              </small>
              <p>Subscribe to receive the latest news from CHANEL</p>
              <MaterialUiInput2>
                <MoreInput2
                  id="custom-css-standard-input"
                  label="Enter your email address"
                />
                <OkAndArrow>
                  ok
                  <RightArrow />
                </OkAndArrow>
              </MaterialUiInput2>
            </NewsLetter>
          </ChanelMoreInfo>
        )}
      </Content>
    </Parallax>
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

const DownArrow = styled(BsChevronDown)`
  transition: all 1s ease;
`;

const MaterialUiInput = styled.div`
  position: relative;

  /* @media (max-width: 480px) {
  } */
`;

const MaterialUiInput2 = styled.div`
  position: relative;
`;

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
  z-index: 11;
  padding: 1px;
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
  z-index: 12;
  height: 35vh;
  background-color: white;

  padding: 30px;

  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  color: #333;
  font-size: 12px;
  font-weight: 100;

  @media (max-width: 480px) {
    flex-direction: column;
    height: fit-content;
    align-items: center;
  }
  @media (min-width: 768px) {
    height: 15vh !important;
  }
`;

const Contact = styled.div`
  width: 25%;
  max-height: 30%;

  small {
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
  }

  p:first-of-type {
    color: #767676;
  }

  ${DownArrow} {
    display: none;
  }

  @media (max-width: 480px) {
    width: 90%;
    color: black;
    position: relative;
    /* background-color: yellow; */

    p {
      display: ${(props) => (props.contact ? "block" : "none")};
    }
    ${DownArrow} {
      display: block;
    }
  }
`;

const FindStore = styled(Contact)`
  position: relative;

  ${MaterialUiInput},p {
    display: block;
  }

  @media (max-width: 480px) {
    ${MaterialUiInput},p {
      display: ${(props) => (props.findStore ? "block !important" : "none")};
    }
  }
`;
const NewsLetter = styled(Contact)`
  ${MaterialUiInput2},p {
    display: block;
  }

  @media (max-width: 480px) {
    ${MaterialUiInput2},p {
      display: ${(props) => (props.newsLetter ? "block !important" : "none")};
    }
  }
`;

const SearchIcon = styled(RiSearchLine)`
  position: absolute;
  font-size: 20px;
  bottom: 8px;
  right: 70px;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 36px !important;
  }
`;

const PositionIcon = styled(MdMyLocation)`
  position: absolute;
  font-size: 20px;
  right: 0;
  bottom: 8px;
  cursor: pointer;
`;

const RightArrow = styled(IoIosArrowForward)``;

const VR = styled.div`
  border-left: 1px solid #d8d8d8;
  height: 23px;
  position: absolute;
  bottom: 7px;
  right: 42px;

  @media (max-width: 768px) {
    right: 27px !important;
  }
`;

const OkAndArrow = styled.div`
  position: absolute;
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: #767676;
  right: 24px;
  bottom: 7px;
  display: flex;
  font-size: 11px;
  align-items: center;
`;
