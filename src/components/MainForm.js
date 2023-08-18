import { useEffect, useState } from "react";
import SelectWeatherEvent from "./SelectWeatherEvent";
import { weatherEventsMockData } from "../data/weatherEvents";

import React from "react";
import WeatherCard from "./WeatherCard";

function MainForm() {
  const [options, setOptions] = useState([]);
  const [selectedWeatherEvent, setSelectedWeatherEvent] = useState("Nessun Evento Selezionato")

  useEffect(() => {
    setOptions(weatherEventsMockData);
  }, []);

  const onSelectWeatherEvent = (e) => {
    setSelectedWeatherEvent(options.find(option => option.value === e.target.value));
  };

  return (
    <form>
      <div className="grid">
        <h2>Seleziona Evento</h2>
        <WeatherCard weatherEvent={selectedWeatherEvent}/> 
        <div className="input-group-container">
          <div>
            <SelectWeatherEvent
              options={options}
              onSelectWeatherEvent={onSelectWeatherEvent}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default MainForm;
