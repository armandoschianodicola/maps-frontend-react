import { useEffect, useState } from "react";
import SelectWeatherEvent from "./SelectWeatherEvent";
import { weatherEventsMockData } from "../data/weatherEvents";

import React from "react";

function MainForm() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(weatherEventsMockData);
  }, []);

  const onSelectWeatherEvent = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <div className="grid">
        <h2>Seleziona Evento</h2>
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
