// REACT
import React, { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
// COMPONENTS
import Slot from "./Slot";

// STYLING
import { SlotSetStyle } from "../styles/styles";

const SlotSet = () => {
  const { answer, selectedSchedule } = useContext(DataContext);

  useEffect(() => {}, [selectedSchedule]);

  return (
    <SlotSetStyle>
      {answer?.data.map((slot, id) => {
        const { startTime, usersAvailable } = slot;
        return (
          <Slot
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
