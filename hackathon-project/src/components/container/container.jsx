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
          backgroundImg={game.background_image} // Pass background image to the card
          genres={game.genres}
          description={game.description}
          id={game.id} // Pass genres to the card
        />
      ))}
    </div>
  );
}
