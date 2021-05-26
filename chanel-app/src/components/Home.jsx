import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <HomeContainer>
      <Section
        query="sunglass"
        type="W"
        small="EYEWEAR"
        h1="2021 COLLECTION PRECIOUS DETAILS"
      />
      <Section
        query="woman"
        type="TW"
        small="FASHION"
        h1="‘Le Château des Dames’ MÉTIERS D’ART 2020/21"
      />
      <Section query="girl" type="W" small="Fine Jewellery" h1="N°5" />
      <Section
        query="lipstick"
        type="TB"
        small="MAKEUP"
        h1="ROUGE COCO BLOOM  A new shine is born. "
      />
      <Section
        query="fingernail"
        type="W"
        small="Fragrance"
        h1="New  COCO MADEMOISELLE  Collection Eté"
      />
      <Section
        query="group"
        type="TW"
        small="FRAGRANCE"
        h1="CELEBRITY BY  SIX INSPIRING VOICES"
      />
      <Section query="watch" type="TW" small="WATCHES" h1="J12" />
      <Section
        query="makeup"
        type="B"
        small="SKINCARE"
        h1="SUBLIMAGE LA COLLECTION LUMIÈRE"
      />
      <Section
        query="diamond"
        type="TW"
        small="High Jewellery"
        h1="N°5 Collection"
      />
      <Section
        query="chanel"
        type="W"
        last={true}
        small="Haute Couture"
        h1="SPRING-SUMMER 2021 SHOW"
      />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
`;
