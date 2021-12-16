// REACT
import React, { useEffect } from "react";

//LIBRARIES
import styled from "styled-components";

const SelectorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    color: white;
    font-weight: bold;
  }
  .select {
    width: 200px;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 8px;
  }
`;

export const SelectorUsers = ({ handleSelectUsers, numberOfUsers }) => {
  useEffect(() => {
    console.log("Number of Users", numberOfUsers);
  }, [numberOfUsers]);

  return (
    <SelectorStyle>
      <p className="text">Select number or users:</p>
      <div>
        <select
          className="select"
          type="number"
          placeholder="Select number of users"
          onChange={handleSelectUsers}
          value={numberOfUsers}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </SelectorStyle>
  );
};
