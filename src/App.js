// REACT
import React, { forwardRef, useContext } from "react";

import DataContext from "./context/DataContext";
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

  const { handleDateSelect, isLoading, selectedDate, setSelectedDate } =
    useContext(DataContext);

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

          <SelectorUsers />
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

          <SelectorUsers />
        </div>

        <SlotSet />
      </AppLayout>
    );
  }
}

export default App;
