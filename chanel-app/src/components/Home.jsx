import styled from "styled-components";
import React from "react";
import Section from "./Section";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";

const FacebookIcon = styled(RiFacebookFill)`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;
const InstagramIcon = styled(AiOutlineInstagram)`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;
const TwitterIcon = styled(SiTwitter)`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;
const YoutubeIcon = styled(ImYoutube)`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;
const LinkedInIcon = styled(SiLinkedin)`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;

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
          <h1>RICHARD CLONED ALSO THIS 😅</h1>
        </ChanelLogo>
        <HiddenContentContainer>
          <HiddenContent>
            <small>EXPLORE CHANEL.COM</small>
            <ul>
              <li>Haute Couture</li>
              <li>Fashion</li>
              <li>High Jewellery</li>
              <li>Fine Jewellery</li>
              <li>Watches</li>
              <li>Eyewear</li>
              <li>Fragrance</li>
              <li>Makeup</li>
              <li>Skincare</li>
              <li>Sitemap</li>
            </ul>
          </HiddenContent>
          <HiddenContent>
            <small>ONLINE SERVICES</small>
            <ul>
              <li>Payment Methods</li>
              <li>Shipping Options</li>
              <li>My Account</li>
              <li>Returns</li>
              <li>Care & Services</li>
              <li>FAQ</li>
            </ul>
          </HiddenContent>
          <HiddenContent>
            <small>BOUTIQUE SERVICES</small>
            <ul>
              <li>Find a Boutique</li>
              <li>Appointments with CHANEL</li>
            </ul>
          </HiddenContent>
          <HiddenContent>
            <small>THE HOUSE OF CHANEL</small>
            <ul>
              <li>Careers</li>
              <li>Legal</li>
              <li>Privacy</li>
              <li>Report to Society</li>
              <li>Fighting Counterfeits</li>
              <li>Financial Results</li>
              <li>Modern Slavery Statement</li>
            </ul>
          </HiddenContent>
        </HiddenContentContainer>

        <VrContainer>
          <VR />
        </VrContainer>
        <FooterContainer>
          <HiddenLeft>
            <p>
              Change location and language
              <span>United Kingdom - English (UK) </span>
            </p>
          </HiddenLeft>
          <HiddenRight>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <LinkedInIcon />
          </HiddenRight>
        </FooterContainer>
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
  /* height: 90vh; */
  height: fit-content;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: -1;

  @media (max-width: 480px) {
    position: static !important;
  }
`;

const HiddenContentContainer = styled.div`
  width: 90%;
  height: 60vh;
  display: flex;

  /* align-items: center; */

  justify-content: space-around;

  @media (max-width: 480px) {
    flex-direction: column !important;
    margin-top: 10px;
    margin-bottom: 10px;
    height: fit-content !important;
  }

  @media (max-width: 768px) {
    width: 90%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    height: 100%;
  }
`;

const HiddenContent = styled.div`
  width: 25%;
  height: 70%;
  margin: 20px;

  @media (max-width: 768px) {
    width: 20%;
    padding: 50px;
    height: 10% !important;
  }
  @media (max-width: 480px) {
    width: 30%;
    padding: 30px;
    height: fit-content !important;

    font-size: 4vw;
  }

  color: #767676;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  small {
    font-weight: 600;
    color: #fff;
  }

  ul {
    padding-left: 0;
  }

  li {
    font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
    list-style: none;
    margin-top: 7px;
    font-weight: 100;
    color: #9b9b9b;
    width: fit-content;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const ChanelLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    padding-top: 25px;
    font-size: 2.7vw;
    font-weight: 600;
    letter-spacing: 5px;
    color: white;

    @media (max-width: 768px) {
      padding-top: 0 !important;
      padding: 10px;
    }
  }
`;

const HiddenLeft = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;
const HiddenRight = styled.div`
  width: 15%;
  height: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const VrContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const VR = styled.div`
  border-bottom: 1px solid #333;
  width: 90%;
  height: 10px;
`;

const FooterContainer = styled.div`
  width: 90%;
  height: 6%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
  color: #767676;
  font-size: 12px;

  span {
    color: #fff;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    height: 100px;
    flex-direction: column;

    ${HiddenRight} {
      width: 70%;
    }
  }
`;
