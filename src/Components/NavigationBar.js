import React from "react";
import { Link } from "react-router-dom";
import "../Components/UI/NavigationBar.css";

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/listofitem">List of item</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
