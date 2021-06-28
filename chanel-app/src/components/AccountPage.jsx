import React, { useState } from "react";
import styled from "styled-components";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

function AccountPage() {
  // const [tabOne, setTabOne] = useState(false);
  // const [tabTwo, setTabTwo] = useState(false);

  // if(tabOne){
  // setTabTwo(false)
  // }else{
  //   setTabOne(true)
  // }

  return (
    <AccountPageContainer>
      <TabsContainer>
        <TabOne>SIGN IN</TabOne>
        <TabTwo>REGISTER</TabTwo>
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
`;
const TabTwo = styled.div`
  position: relative;
  background-color: pink;
  height: 100%;
  width: 50%;
  cursor: pointer;
`;

const OR = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  border-bottom: 2px solid black;
`;
