import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export default function Header({ onFilter, onSearch }) {
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

  return (
    <header className="header">
      <h1 className="header h1">CSC Gamecards Catalogue</h1>

      {/* Genre Filter Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        {/* MUI Button Group with Genre Buttons */}
        <ButtonGroup variant="outlined" aria-label="Genre button group">
          <Button onClick={() => onFilter("Action")}>Action</Button>
          <Button onClick={() => onFilter("Indie")}>Indie</Button>
          <Button onClick={() => onFilter("Adventure")}>Adventure</Button>
          <Button onClick={() => onFilter("RPG")}>RPG</Button>
          <Button onClick={() => onFilter("Shooter")}>Shooter</Button>
          <Button onClick={() => onFilter("Platformer")}>Platformer</Button>
          <Button onClick={() => onFilter("Sports")}>Sports</Button>
          <Button onClick={() => onFilter("Fighting")}>Fighting</Button>
          <Button onClick={() => onFilter("All")}>All</Button>
        </ButtonGroup>
        
        {/* Search bar */}
        {/* MUI TextField as search bar */}
        <TextField
  id="outlined-search"
  label="Search"
  variant="outlined"  // You can change this to "filled" or "standard" as per your preference
  value={searchQuery}
  onChange={handleSearch}
  style={{ width: '1235px' }}
  InputProps={{
    style: {
      color: '#ffffff', // Change the text color inside the input
    },
  }}
  InputLabelProps={{
    style: {
      color: '#ffffff', // Change the label color
    },
  }}
/>
      </Box>
    </header>
  );
}

// PropTypes validation
Header.propTypes = {
    onFilter: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};
