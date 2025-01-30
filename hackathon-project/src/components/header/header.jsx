import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

export default function Header({ onFilter }) {
  return (
    <header className="header">
      <h1>CSC Gamecards Catalogue</h1>

      {/* Genre Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => onFilter("Action")}>Action</button>
        <button onClick={() => onFilter("Indie")}>Indie</button>
        <button onClick={() => onFilter("Adventure")}>Adventure</button>
        <button onClick={() => onFilter("RPG")}>RPG</button>
        <button onClick={() => onFilter("Strategy")}>Strategy</button>
        <button onClick={() => onFilter("Shooter")}>Shooter</button>
        <button onClick={() => onFilter("Casual")}>Casual</button>
        <button onClick={() => onFilter("Simulation")}>Simulation</button>
        <button onClick={() => onFilter("Arcade")}>Arcade</button>
        <button onClick={() => onFilter("Platformer")}>Platformer</button>
        <button onClick={() => onFilter("Sports")}>Sports</button>
        <button onClick={() => onFilter("Fighting")}>Fighting</button>
        <button onClick={() => onFilter("All")}>All</button>
        <input className="search-bar" type="text" placeholder="Search.." />
      </div>
    </header>
  );
}
// PropTypes validation
Header.propTypes = {
    onFilter: PropTypes.func.isRequired, // Validate onFilter is a function and required
  };