import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <HomeContainer>
      <Section query="catwalk" />
      <Section query="man" />
      <Section query="girl" />
      <Section query="baby" />
      <Section query="italy" />
      <Section query="dog" />
      <Section query="chanel" />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
`;
