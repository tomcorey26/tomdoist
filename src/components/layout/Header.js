import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="/images/logo" alt="Todoist" />
        </div>
        <div className="settings">
          <li>+</li>
          <li>
            <FaPizzaSlice />
          </li>
        </div>
      </nav>
    </header>
  );
};
