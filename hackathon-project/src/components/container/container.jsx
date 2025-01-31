import { useState } from "react";
import Gamecard from "../gamecards/cards.jsx";
import "./container.css";

export default function GamecardContainer({ gamecards }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCard((prev) => (prev === cardId ? null : cardId)); // Toggle expand/collapse
  };

  return (
    <div className="gamecards-container">
      {gamecards.map((game, index) => (
        <Gamecard
          key={index}
          title={game.name}
          releaseDate={game.released}
          backgroundImg={game.background_image}
          genres={game.genres}
          rating={game.rating}
          description={game.description}
          id={game.id}
          isExpanded={expandedCard === game.id} // Check if this is the expanded card
          isDisabled={expandedCard !== null && expandedCard !== game.id} // Disable others
          onCardClick={handleCardClick} // Pass click handler
        />
      ))}
    </div>
  );
}
