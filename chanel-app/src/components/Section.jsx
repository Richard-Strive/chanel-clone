import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function Section({ query, type, last }) {
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
    <Content style={{ opacity: `${isMounted && "1"}` }}>
      <img
        src={`https://source.unsplash.com/1600x1600/?${query}`}
        alt="modal"
        ref={bg}
      />

      <TextContainer>
        <small>EYEWEAR</small>
        <h1>2021 COLLECTION PRECIOUS DETAILS</h1>
        <TextContainerBtn type={type}>SEE MORE</TextContainerBtn>
      </TextContainer>
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

const Content = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  opacity: 0.1;
  transition: opacity 4s;
  color: white;

  img {
    object-fit: cover;
  }
`;
