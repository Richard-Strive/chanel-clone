import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ComingSoonContainer>
      <small style={{ opacity: `${mounted && "1"}` }}>Richard for CHANEL</small>
      <h1 style={{ opacity: `${mounted && "1"}` }}>COMING SOON</h1>
      <button
        style={{ opacity: `${mounted && "1"}` }}
        onClick={() => dispatch({ type: "COMING_SOON", payload: false })}
      >
        &times;
      </button>
    </ComingSoonContainer>
  );
}

export default ComingSoonPage;

const ComingSoonContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;

  button {
    border: none;
    background-color: black;
    color: white;
    font-size: large;
    cursor: pointer;
  }
  small,
  h1,
  button {
    opacity: 0.01;
    transition: all 5s ease;
  }
`;
