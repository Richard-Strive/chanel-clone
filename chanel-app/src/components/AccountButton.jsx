import React from "react";
import styled from "styled-components";

function AccountButton({ text, line }) {
  return <FormButton line={line}>{text}</FormButton>;
}

export default AccountButton;

const FormButton = styled.div`
  width: 30vw;
  height: 10vh;
  background-color: black;
  color: white;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    border-bottom: 1px solid white;
    position: absolute;
    width: ${(props) => props.line};
    bottom: 17px;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
  &:hover:after {
    opacity: 10;
  }
`;
