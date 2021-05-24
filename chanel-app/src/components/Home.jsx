import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <HomeContainer>
      <Section
        query="sunglass"
        t={true}
        b={false}
        w={true}
        bb={true}
        wb={true}
      />
      <Section query="woman" w={true} wb={true} />
      <Section query="girl" w={true} />
      <Section
        query="lipstick"
        t={true}
        b={false}
        w={false}
        bb={true}
        wb={false}
      />
      <Section
        query="fingernail"
        t={false}
        b={false}
        w={true}
        bb={true}
        wb={true}
      />
      <Section
        query="group"
        t={true}
        b={false}
        w={false}
        bb={false}
        wb={true}
      />
      <Section
        query="watch"
        t={true}
        b={false}
        w={false}
        bb={false}
        wb={true}
      />
      <Section
        query="makeup"
        t={false}
        b={true}
        w={false}
        bb={false}
        wb={false}
      />
      <Section
        query="diamond"
        t={true}
        b={false}
        w={false}
        bb={false}
        wb={true}
      />
      <Section
        query="chanel"
        t={false}
        b={false}
        w={true}
        bb={false}
        wb={false}
      />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
`;
