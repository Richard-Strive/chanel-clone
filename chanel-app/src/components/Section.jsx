import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function Section({ query }) {
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
    </Content>
  );
}

export default Section;

const Content = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  opacity: 0.1;
  transition: opacity 4s;

  img {
    object-fit: cover;
    @media (min-width: 481px) and (max-width: 768px) {
      transform: scale(1.5) !important ;
    }
  }
`;
