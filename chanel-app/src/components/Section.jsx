import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function Section({ query }) {
  let bg = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      let velocity = 0.06;

      bg.current.style.transform = `translateY(${value * velocity + "px"})`;
    });
    console.log(bg.current.style.top);
  }, []);

  return (
    <Content>
      <img
        src={`https://source.unsplash.com/1600x900/?${query}`}
        alt="modal"
        ref={bg}
      />
    </Content>
  );
}

export default Section;

const Content = styled.div`
  border: 5px solid blue;
  margin-top: 10px;
  background-color: yellow;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;

  img {
    object-fit: cover;
  }
`;
