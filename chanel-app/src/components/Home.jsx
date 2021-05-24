import React, { useState } from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  const [sections] = useState([
    "sunglass",
    "woman",
    "girl",
    "lipstick",
    "fingernail polish",
    "group",
    "watches",
    "makeup",
    "jewellery",
    "chanel",
  ]);

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
  background-color: black;
`;
