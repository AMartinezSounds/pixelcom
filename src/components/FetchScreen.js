import React from "react";
import styled from "styled-components";
import EngineFx from "./EngineFx";

const FetchScreenStyle = styled.div`
  background-color: #3d3d3d;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FetchScreen = () => {
  return (
    <FetchScreenStyle>
      <EngineFx />
    </FetchScreenStyle>
  );
};

export default FetchScreen;
