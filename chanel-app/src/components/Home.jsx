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
      <HiddenSection>
        <ChanelLogo>
          <h1>Chanel</h1>
        </ChanelLogo>
        <HiddenContentContainer>
          <HiddenContent></HiddenContent>
          <HiddenContent></HiddenContent>
          <HiddenContent></HiddenContent>
          <HiddenContent></HiddenContent>
        </HiddenContentContainer>
        <HiddenFooter>
          <VR />
          <HiddenLeft></HiddenLeft>
          <HiddenRight></HiddenRight>
        </HiddenFooter>
      </HiddenSection>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

const HiddenSection = styled.div`
  position: sticky;
  bottom: 0;
  height: 90vh;
  width: 100%;
  background-color: black;
  z-index: -1;
`;

const ChanelLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: pink;

  h1 {
    padding-top: 25px;
    font-size: 2.7vw;
    font-weight: 600;
    letter-spacing: 5px;
    color: white;

    @media (max-width: 768px) {
      padding-top: 0 !important;
    }
  }
`;

const HiddenContentContainer = styled.div`
  background-color: lightgreen;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HiddenContent = styled.div`
  width: 23%;
  height: 70%;
  background-color: lightyellow;
  color: #767676;
`;

const HiddenFooter = styled.div`
  height: 10%;
  width: 100%;
  background-color: azure;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VR = styled.div`
  border-bottom: 1px solid red;
  width: 80%;
  height: 1px;
  position: absolute;
  top: 10px;
  align-self: flex-end;
`;

const HiddenLeft = styled.div`
  background-color: lightcoral;
  width: 20%;
  height: 30px;
`;
const HiddenRight = styled.div`
  background-color: lightblue;
  width: 10%;
  height: 30px;
`;
