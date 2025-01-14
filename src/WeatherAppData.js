import React from "react";

import "./styles.css";

export default function WeatherAppData() {
  return (
    <div className="WeatherAppData">
      <div className="weatherAppData">
        <h1 className="weatherAppCityName" id="weather-app-city-name"></h1>

        <p className="weatherAppCurrentConditions">
          <span id="time">Tuesday, 10:09,</span>
          <span id="description">clear sky</span>
          <br />
          Humidity: <strong id="humidity">75%</strong>, Wind:{" "}
          <strong id="wind-speed">7mph</strong>
        </p>
      </div>
    </div>
  );
}
