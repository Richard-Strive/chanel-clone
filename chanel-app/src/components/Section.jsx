import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function Section({ query, t, b, w, bb, wb }) {
  const [isMounted, setIsMounted] = useState(false);

  let bg = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      let velocity = 0.06;

      bg.current.style.transform = `translateY(${value * velocity + "px"})`;
    });
    console.log(bg.current.style.top);
    setIsMounted(true);
  }, []);

  return (
    <Content style={{ opacity: `${isMounted && "1"}` }}>
      <img
        src={`https://source.unsplash.com/1600x900/?${query}`}
        alt="modal"
        ref={bg}
      />

      <TextContainer>
        <small>EYEWEAR</small>
        <h1>2021 COLLECTION PRECIOUS DETAILS</h1>
        <TextContainerBtn>SEE MORE</TextContainerBtn>
      </TextContainer>
    </Content>
  );
}

export default Section;

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
  background-color: white;
  width: 8vw;
  height: 7vh;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8vw;
  font-weight: 600;
  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    color: black;
    bottom: 1.5vh;
    width: 5.1vw;
    border-bottom: 1px solid black;
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
    @media (min-width: 481px) and (max-width: 768px) {
      transform: scale(1.5) !important ;
    }
  }
`;
