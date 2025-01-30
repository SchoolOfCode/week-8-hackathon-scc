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
        <button onClick={() => onFilter("FPS")}>FPS</button>
        <button onClick={() => onFilter("RPG")}>RPG</button>
        <button onClick={() => onFilter("Adventure")}>Adventure</button>
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