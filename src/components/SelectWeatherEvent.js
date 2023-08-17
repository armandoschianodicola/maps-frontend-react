import React from "react";

function SelectWeatherEvent({ options, onSelectWeatherEvent }) {

  return (
    <select
      id="weatherEvent"
      className="select-filterbar input-control"
      onChange={e => onSelectWeatherEvent(e)}
    >
      <option>
        -- Seleziona Evento --
      </option>
      {options && options.map((option, i) => (
        <option key={i} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default SelectWeatherEvent;
