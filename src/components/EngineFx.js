import React from "react";

// STYLING
import { Engine1, Engine2, EngineStyles, Text } from "../styles/styles";

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
