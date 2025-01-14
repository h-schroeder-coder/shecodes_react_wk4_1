import React from "react";

import "./styles.css";

export default function Header() {
  return (
    <div className="Header">
      <form className="searchForm" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          id="city-name"
        />
        <input type="submit" value="Search" id="city-submit-button" />
      </form>
    </div>
  );
}
