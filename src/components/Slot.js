// REACT
import React, { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";

//STYLING
import { SlotStyle } from "../styles/styles";

const Slot = ({ startTime, usersAvailable }) => {
  const { selectedSchedule, setSelectedSchedule, numberOfUsers } =
    useContext(DataContext);

  const handleSelectedSchedule = (e) => {
    if (!selectedSchedule.includes(e.target.value)) {
      setSelectedSchedule((prev) => {
        return [...prev, { schedule: e.target.value }];
      });
    } else {
      return;
    }
  };
  const users = usersAvailable - numberOfUsers;
  useEffect(() => {}, [numberOfUsers]);

  const handleCleanStartTime = (time) => {
    const cleanTime = time.slice(0, 5);
    return cleanTime;
  };

  return (
    <SlotStyle>
      <div className="time-and-input">
        <p className="start-time">{handleCleanStartTime(startTime)}</p>
        {numberOfUsers < usersAvailable ? (
          <input
            value={startTime}
            type="checkbox"
            onChange={handleSelectedSchedule}
          />
        ) : (
          ""
        )}
      </div>
      {numberOfUsers <= usersAvailable ? (
        <p>
          Users Available: {users} / {usersAvailable}
        </p>
      ) : (
        <p>Not available</p>
      )}
    </SlotStyle>
  );
};

export default Slot;
