import { useEffect, useState } from "react";
import GamecardContainer from "./components/container/container.jsx";
import "./App.css";

// Updating App.jsx to Make the API Call:
// We'll move the logic of fetching data into GamecardContainer, where we'll handle the API call and pass the results as props to the Gamecard.

function App() {
  const [games, setGames] = useState([]);

  // Fetch games from the RAWG API
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/games?key=d0a3e280b6c545a288835deb5024c6f9&page_size=9"
      );
      const data = await response.json();
      setGames(data.results); // Store the game results in state
    };

    fetchGames();
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div className="App">
      <GamecardContainer gamecards={games} />
    </div>
  );
}

export default App;
