import React from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

function SearchPage() {
  return (
    <SearchContainer>
      <CloseBtn aria-hidden="true">&times;</CloseBtn>
      <SearchContent>
        <SearchInput>
          <input type="text" placeholder="SEARCH" />
          <SearchIcon />
        </SearchInput>
        <SearchLinks>
          <ul>
            <li>Suggestions</li>
            <li>FALL-WINTER 2021/22 SHOW</li>
            <li>THE J12 WATCH</li>
            <li>CHANEL FACTORY 5</li>
            <li>STORE LOCATOR</li>
          </ul>
        </SearchLinks>
      </SearchContent>
    </SearchContainer>
  );
}

export default SearchPage;

const CloseBtn = styled.div`
  position: absolute;
  right: 10px;

  font-size: 40px;
  top: 10px;
  height: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  /* background-color: burlywood; */
`;

const SearchContent = styled.div`
  height: 100vh;
  width: 60vw;
`;
const SearchLinks = styled.div`
  width: 100%;
  height: 70vh;

  ul {
    list-style: none;

    li:first-of-type {
      font-weight: 100;
      font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
      cursor: text;
    }

    li {
      margin: 10px 0;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
const SearchIcon = styled(RiSearchLine)`
  position: absolute;
  right: 0;
  top: 36px;
  font-size: 17px;
`;
const SearchInput = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  position: relative;

  input {
    width: 100%;
    height: 10vh;
    padding-top: 23px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 50px;
    font-family: abchanel-corpo, sans-serif;
    display: flex;
    text-align: center;
    &:focus {
      outline: none;
      border-bottom: 3px solid black;
    }
    transition: all 250ms ease;
  }
`;
