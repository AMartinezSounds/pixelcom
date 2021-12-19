import React, { useState, useEffect, createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // STATE OF THE WORLD
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [numberOfUsers, setNumberOfUsers] = useState(parseInt(0));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSchedule, setSelectedSchedule] = useState([]);

  // ENDPOINT
  const endpoint = `http://test.services.pixeltiming.com:4400/booking/availability?date=${selectedDate}`;

  // SIDE EFFECTS
  useEffect(() => {
    setIsLoading(true);
    fetch(endpoint, {
      headers: {
        method: "GET",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZENvbXBhbnkiOjF9.PRKLjlVvM7QHIiBL4gxz5HRREunU8gpWmw78oycSLaU",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setAnswer(result);
        setIsLoading(false);
      });
  }, [endpoint, selectedDate]);

  // FUNCTIONS
  const handleDateSelect = () => {};

  const handleSelectUsers = (e) => {
    setNumberOfUsers(e.target.value);
  };
  return (
    <DataContext.Provider
      value={{
        handleSelectUsers,
        numberOfUsers,
        setNumberOfUsers,
        answer,
        setAnswer,
        selectedDate,
        setSelectedDate,
        selectedSchedule,
        setSelectedSchedule,
        isLoading,
        setIsLoading,
        handleDateSelect,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
