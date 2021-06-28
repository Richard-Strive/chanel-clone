import React, { useState } from "react";
import styled from "styled-components";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

function AccountPage() {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);

  const handleTabOne = () => {
    setTabOne(true);
    setTabTwo(false);
  };

  const handleTabTwo = () => {
    setTabTwo(true);
    setTabOne(false);
  };

  return (
    <AccountPageContainer>
      <h1>ACCOUNT</h1>
      <TabsContainer>
        <TabOne onClick={() => handleTabOne()} tabOne={tabOne}>
          SIGN IN
        </TabOne>
        <TabTwo onClick={() => handleTabTwo()} tabTwo={tabTwo}>
          REGISTER
        </TabTwo>
        <OR />
      </TabsContainer>
      <RegistrationPage />
    </AccountPageContainer>
  );
}

export default AccountPage;

const AccountPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  position: relative;
  width: 30vw;
  height: 10vh;
  background-color: yellow;
  display: flex;
`;

const TabOne = styled.div`
  position: relative;
  background-color: aqua;
  height: 100%;
  width: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.tabOne
      ? `&:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    border-bottom: 3px solid blue;
  }`
      : ""};
`;
const TabTwo = styled.div`
  position: relative;
  background-color: pink;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.tabTwo
      ? `&:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    border-bottom: 3px solid blue;
  }`
      : ""};
`;

const OR = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  border-bottom: 1px solid black;
  bottom: 0;
`;
