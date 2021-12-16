import React from "react";
import styled from "styled-components";

const EngineStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 180px;
  height: 150px;
`;

const Engine1 = styled.div`
  position: absolute;
  top: 0px;
  left: 48px;
  animation-name: rotation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  transform: rotate(0);
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(1turn);
    }
  }
`;

const Engine2 = styled.div`
  position: absolute;
  top: 26px;
  right: 48px;
  animation-name: rotation2;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  transform: rotate(0);
  @keyframes rotation2 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-1turn);
    }
  }
`;

const Text = styled.div`
  position: absolute;
  top: 100px;
  color: white;
  font-weight: bold;
`;

const EngineFx = () => {
  return (
    <EngineStyles>
      <Engine1>
        <img src="./assets/icons/engine.svg" alt="engine" />
      </Engine1>
      <Engine2>
        <img src="./assets/icons/engine.svg" alt="engine" />
      </Engine2>
      <Text>Loading Results...</Text>
    </EngineStyles>
  );
};

export default EngineFx;
