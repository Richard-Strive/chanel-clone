import React from "react";
import styled from "styled-components";

function WishPage() {
  return (
    <WishContainer>
      <h1>CREATE WISHLIST</h1>
      <small>
        You have not saved any items yet. Explore CHANEL.com and add products
        and looks to your wishlist.
      </small>
    </WishContainer>
  );
}

export default WishPage;

const WishContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
