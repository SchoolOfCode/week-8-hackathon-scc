import { useState, useEffect } from "react";

export default function Gamecard({
  title,
  releaseDate,
  genres,
  backgroundImg,
  description,
  id,
  isExpanded,
  isDisabled,
  onCardClick, // Function to handle click from parent
}) {
  const [gameDescription, setGameDescription] = useState(description);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch description when expanding and if not already fetched
    const fetchDescription = async () => {
      if (isExpanded && !gameDescription && !loading) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.rawg.io/api/games/${id}?key=d0a3e280b6c545a288835deb5024c6f9`
          );
          const data = await response.json();
          setGameDescription(data.description);
        } catch (error) {
          console.error("Error fetching description:", error);
          setGameDescription("Error loading description.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDescription();
  }, [isExpanded, gameDescription, id, loading]);

  return (
    <div
      className={`Gamecard ${isExpanded ? "expanded" : ""}`} // Toggle expanded class
      style={{
        backgroundImage: `url(${backgroundImg})`,
        pointerEvents: isDisabled ? "none" : "auto", // Disable interaction when needed
      }}
      onClick={() => !isDisabled && onCardClick(id)} // Ensure only clickable when allowed
    >
      <h3>{title}</h3>
      <br />
      <h5>{releaseDate}</h5>
      <br />
      <p>
        <strong>Genres:</strong> {genres.map((genre) => genre.name).join(", ")}
      </p>

      {isExpanded && (
        <div className="game-description">
          {loading ? <p>Loading description...</p> : <p>{gameDescription}</p>}
        </div>
      )}
    </div>
  );
}
