import React from "react";

// Styles
import "../styles/Header.css"


const Header = ({handleTask}) => {

  return (
    <header className="normal-header">
      <h2>TO DO LIST</h2>

      <ul>
        <li>
          <button 
          onClick={() => handleTask(0)}
          >
            See all
          </button>
        </li>
        <li>
            <button
            onClick={() => handleTask(1)}
            >
              See completed
            </button>
        </li>
        <li>
            <button
            onClick={() => handleTask(2)}
            >
              See not completed
            </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;