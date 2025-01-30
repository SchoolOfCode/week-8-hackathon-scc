import { useEffect, useState } from "react";
import GamecardContainer from "./components/container/container.jsx";
import "./App.css";
import Header from "./components/header/header.jsx";

// Updating App.jsx to Make the API Call:
// We'll move the logic of fetching data into GamecardContainer, where we'll handle the API call and pass the results as props to the Gamecard.

function App() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch games from the RAWG API
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/games?key=d0a3e280b6c545a288835deb5024c6f9&page_size=9"
      );
      const data = await response.json();
      setGames(data.results); // Store the game results in state
      setFilteredGames(data.results); // Initially show all games
    };

    fetchGames();
  }, []); // Empty array ensures this runs only once when the component mounts

  // Filter games based on the selected genre
  const onFilter = (genre) => {
    if (genre === "All") {
      setFilteredGames(games); // If 'All' is selected, show all games
    } else {
      const filtered = games.filter((game) =>
        game.genres.some((g) => g.name.toLowerCase() === genre.toLowerCase())
      );
      setFilteredGames(filtered); // Filter games by genre
    }
  };

  // Filter games based on the search query
  const onSearch = (query) => {
    console.log("Search Query:", query);
    setSearchQuery(query);
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered); // Filter games by search query
  }

  return (
    <div className="App">
      <Header onFilter={onFilter} onSearch={onSearch}/>
      <GamecardContainer gamecards={filteredGames} />
    </div>
  );
}

export default App;
