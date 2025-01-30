import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>CSC Gamecards Catalogue</h1>

            {/* Genre Filter Buttons */}
            <div className="filter-buttons">
        <button onClick={() => onFilter("Action")}>Action</button>
        <button onClick={() => onFilter("FPS")}>Action</button>
        <button onClick={() => onFilter("RPG")}>RPG</button>
        <button onClick={() => onFilter("Adventure")}>Adventure</button>
        <button onClick={() => onFilter("All")}>All</button>
      </div>
    </header>
  );
}