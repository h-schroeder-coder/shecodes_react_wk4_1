import React from "react";

import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This webpage was coded by
        <a href="https://github.com/h-schroeder-coder" target="_blank" rel="noreferrer">
          Hannah Schroeder
        </a>
        as part of a
        <a href="https://www.shecodes.io/workshops" target="_blank" rel="noreferrer">
          SheCodes Plus Workshop,
        </a>
        and is on
        <a
          href="https://github.com/h-schroeder-coder/shecodes_react_wk4_1"
          target="_blank" rel="noreferrer"
        >
          GitHub
        </a>
        and is hosted by
        <a href="/" target="_blank" rel="noreferrer">
          Netifly
        </a>
      </footer>
    </div>
  );
}
