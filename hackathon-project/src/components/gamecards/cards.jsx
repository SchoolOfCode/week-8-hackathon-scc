import { useState } from "react";

export default function Gamecard({ title, releaseDate }) {
    // Will be a image/button to allow change of state between normal size in a grid of 9 or full-size
  
    const [expanded, setExpanded] = useState(false);
    const handleExpand = () => {
      setExpanded(!expanded);
    };
// Default state is normal size
// Changes to the larger size upon click
// Holds a text area for the title of the game
// Expanded version also shows release date etc 

// A variable that allows Toggle between default and expanded sizes onClick/useState
// Expansion also covers the other 8 in the view and prevents them from being clicked 
// Exported and called within app.jsx

    return (
        <div className="Gamecard">
            <h3> {title} </h3>
          </div>
    );
        
        
        
        
        
}