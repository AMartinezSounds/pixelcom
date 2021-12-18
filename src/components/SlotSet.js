// REACT
import React, { useEffect } from "react";

// COMPONENTS
import Slot from "./Slot";

// STYLING
import { SlotSetStyle } from "../styles/styles";

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
