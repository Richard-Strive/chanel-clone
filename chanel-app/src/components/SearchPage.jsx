import React from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

const SearchIcon = styled(RiSearchLine)``;

function SearchPage() {
  return (
    <SearchContainer>
      <SearchContent>
        <SearchInput placeholder="SEARCH"></SearchInput>
        <SearchLinks />
      </SearchContent>
    </SearchContainer>
  );
}

export default SearchPage;

const SearchContainer = styled.div`
  background-color: blue;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const SearchContent = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: yellow;
`;
const SearchLinks = styled.div`
  width: 100%;
  height: 70vh;
  background-color: green;
`;

const SearchInput = styled.input`
  background-color: tomato;
  position: relative;
  width: 100%;
  height: 15vh;
  border: none;
  border-bottom: 1px solid black;
  font-size: 50px;
  font-family: abchanel-corpo, sans-serif;
  display: flex;
  text-align: center;
  &:focus {
    outline: none;
    border-bottom: 3px solid red;
  }
  transition: all 250ms ease;
`;
