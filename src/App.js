// REACT
import React, { useState, useEffect, forwardRef } from "react";
import "./styles/App.css";
// LIBRARIES

import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";

// COMPONENTS
import DatePicker from "react-datepicker";
import SlotSet from "./components/SlotSet";
import { SelectorUsers } from "./components/SelectorUsers";
import FetchScreen from "./components/FetchScreen";

// STYLING
import { AppLayout } from "./styles/styles";

function App() {
  // DATE INTERNATIONALIZATION
  registerLocale("es", es);

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

  // CUSTOMISE DATE PICKER INPUT
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  if (isLoading) {
    return (
      <AppLayout>
        <div className="picker-selector">
          <p className="text">Pick a date:</p>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            onSelect={handleDateSelect}
            placeholderText="Click to select a date"
            locale="es"
            customInput={<CustomInput />}
          />

          <SelectorUsers
            handleSelectUsers={handleSelectUsers}
            numberOfUsers={numberOfUsers}
          />
        </div>
        <FetchScreen />;
      </AppLayout>
    );
  } else {
    return (
      <AppLayout>
        <div className="picker-selector">
          <p className="text">Pick a date:</p>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            onSelect={handleDateSelect}
            placeholderText="Click to select a date"
            locale="es"
            customInput={<CustomInput />}
          />

          <SelectorUsers
            handleSelectUsers={handleSelectUsers}
            numberOfUsers={numberOfUsers}
          />
        </div>

        <SlotSet
          answer={answer}
          selectedSchedule={selectedSchedule}
          setSelectedSchedule={setSelectedSchedule}
          numberOfUsers={numberOfUsers}
        />
      </AppLayout>
    );
  }
}

export default App;
