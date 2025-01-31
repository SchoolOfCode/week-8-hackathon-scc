import { useState, useEffect } from "react";


export default function Gamecard({
  title,
  releaseDate,
  genres,
  backgroundImg,
  description, // This prop can be passed initially if available
  id, // Assuming you also have a game id prop for the API call
}) {
  // State to manage the expanded state of the card and the game description
  const [expanded, setExpanded] = useState(false);
  // Start with the passed description (if any)
  const [gameDescription, setGameDescription] = useState(description);
  // State to manage loading state when fetching the description
  // This prevents multiple API calls when expanding multiple cards
  const [loading, setLoading] = useState(false);

  // Function to handle expanding the card and fetching the description
  const handleExpand = async () => {
    setExpanded(!expanded);

    // If the description is not yet fetched, fetch it when expanding
    // Also, check if we are not already loading to prevent multiple API calls
    if (!gameDescription && !loading) {
      // When we start fetching, set loading to true
      setLoading(true);

      // Fetch the game description using the game id used as a prop to call the API
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=d0a3e280b6c545a288835deb5024c6f9`
        );
        const data = await response.json();

        // Update the game description state using setGameDescription with the fetched
        setGameDescription(data.description);
      } catch (error) {
        console.error("Error fetching description:", error);
        setGameDescription("Error loading description.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className={`Gamecard ${expanded ? "expanded" : ""}`} // Toggle expanded class
      style={{ backgroundImage: `url(${backgroundImg})` }}
      onClick={handleExpand}
    >
      <h3>{title}</h3>
      <br />
      <h5>{releaseDate}</h5>
      <br />
      <p>
        <strong>Genres:</strong> {genres.map((genre) => genre.name).join(", ")}
      </p>

      {expanded && (
        <div className="game-description">
          {loading ? <p>Loading description...</p> : <p>{gameDescription}</p>}
        </div>
      )}
    </div>
  );
}
