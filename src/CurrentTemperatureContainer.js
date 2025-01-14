import React from "react";

import "./styles.css";

export default function CurrentTemperatureContainer() {
  return (
    <div className="CurrentTemperatureContainer">
      <div className="weatherAppCurrentTemperatureContainer">
        <span id="tempIcon">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            class="weatherAppTempIcon"
            id="icon"
          ></img>
        </span>
        <span
          className="weatherAppTempValue"
          id="weather-app-temp-value"
        >-3</span>
        <span className="weatherAppTempUnit">°F</span>
      </div>
    </div>
  );
}
