import Gamecard from "../gamecards/cards.jsx";
import "./container.css";

export default function GamecardContainer({ gamecards }) {
  return (
    <div className="gamecards-container">
      {gamecards.map((game, index) => (
        <Gamecard
          key={index}
          title={game.name}
          releaseDate={game.released}
          genres={game.genres} // Pass genres to the card
        />
      ))}
    </div>
  );
}
