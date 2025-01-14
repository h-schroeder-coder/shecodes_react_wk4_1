import React from "react";

import "./styles.css";

import WeatherAppData from "./WeatherAppData";
import CurrentTemperatureContainer from "./CurrentTemperatureContainer";

export default function CurrentWeatherSection() {
  return (
    <div className="CurrentWeatherSection">
      <WeatherAppData />
      <CurrentTemperatureContainer />
    </div>
  );
}
