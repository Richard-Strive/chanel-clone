import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <HomeContainer>
      <Section query="sunglass" type="W" />
      <Section query="woman" type="TW" />
      <Section query="girl" type="W" />
      <Section query="lipstick" type="TB" />
      <Section query="fingernail" type="W" />
      <Section query="group" type="TW" />
      <Section query="watch" type="TW" />
      <Section query="makeup" type="B" />
      <Section query="diamond" type="TW" />
      <Section query="chanel" type="W" last={true} />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
`;
