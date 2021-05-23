import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function Section() {
  let bg = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      let velocity = 0.06;

      // bg.current.style.top = value * velocity + "px";

      bg.current.style.transform = `translateY(${value * velocity + "px"})`;
    });
    console.log(bg.current.style.top);
  }, []);

  return (
    <Content>
      <img
        src="https://source.unsplash.com/1600x900/?nature,water"
        alt="modal"
        ref={bg}
      />
    </Content>
  );
}

export default Section;

const Content = styled.div`
  background-color: turquoise;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
  margin-top: 50px;

  img {
    object-fit: cover;
  }
`;
