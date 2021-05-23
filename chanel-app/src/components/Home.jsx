import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <HomeContainer>
      <Section />
      <Section />
      <Section />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
`;
