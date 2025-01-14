import React from "react";
import "./App.css";
import "./styles.css";
import Header from "./Header";
import CurrentWeatherSection from "./CurrentWeatherSection";
import ForecastedWeatherSection from "./ForecastedWeatherSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="weatherApp">
      <Header />
      <CurrentWeatherSection />
      <ForecastedWeatherSection />
      <Footer />
    </div>
  );
}

export default App;
