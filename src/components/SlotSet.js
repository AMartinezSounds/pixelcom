// REACT
import React, { useEffect } from "react";
// LIBRARIES
import styled from "styled-components";

// COMPONENTS
import Slot from "./Slot";

//STYLING
const SlotSetStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 96px;
`;

const SlotSet = ({
  answer,
  selectedSchedule,
  setSelectedSchedule,
  numberOfUsers,
}) => {
  useEffect(() => {}, [selectedSchedule]);

  return (
    <SlotSetStyle>
      {answer?.data.map((slot, id) => {
        const { startTime, usersAvailable } = slot;
        return (
          <Slot
            numberOfUsers={numberOfUsers}
            selectedSchedule={selectedSchedule}
            setSelectedSchedule={setSelectedSchedule}
            startTime={startTime}
            usersAvailable={usersAvailable}
            key={id}
            id={id}
          />
        );
      })}
    </SlotSetStyle>
  );
};

export default SlotSet;
