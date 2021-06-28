import React from "react";
import styled from "styled-components";

function RegistrationPage() {
  return (
    <RegistrationPageContainer>
      <small>
        Create an account to enjoy a personalised shopping experience and faster
        online checkout.
      </small>
    </RegistrationPageContainer>
  );
}

export default RegistrationPage;

const RegistrationPageContainer = styled.div`
  height: 90vh;
  width: 30vw;
  background-color: coral;
  font-family: "Times New Roman", Times, serif;

  small {
    font-size: 12px;

    font-weight: 300;
    background-color: aqua;
  }
`;
