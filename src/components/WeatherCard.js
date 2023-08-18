import React from "react";

function WeatherCard(weatherEvent) {
  return (
    <div className={`card-${weatherEvent.weatherEvent.labelName}`}>
      {weatherEvent.weatherEvent.label}
    </div>
  );
}

export default WeatherCard;
