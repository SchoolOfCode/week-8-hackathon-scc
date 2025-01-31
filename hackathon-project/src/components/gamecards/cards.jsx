import { useState, useEffect } from "react";

// Function to remove HTML tags from description
const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

export default function Gamecard({
  title,
  releaseDate,
  genres,
  backgroundImg,
  description,
  id,
  isExpanded,
  rating,
  isDisabled,
  onCardClick, // Function to handle click from parent
}) {
  const [gameDescription, setGameDescription] = useState(
    description ? stripHtmlTags(description) : "" // StripHTML tags gets rid of all the html tags that come with the JSON body.
  );
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
          setGameDescription(stripHtmlTags(data.description)); // Strip HTML tags
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
      {!isExpanded ? (
        <>
          <h3>{title}</h3>
          <br />
          <h5>{releaseDate}</h5>
          <br />
          <p>Rating: {rating}</p>
          <br />
          <p>
            <strong>Genres:</strong>{" "}
            {genres.map((genre) => genre.name).join(", ")}
          </p>
        </>
      ) : (
        <div className="game-description">
          {loading ? <p>Loading description...</p> : <p>{gameDescription}</p>}
        </div>
      )}
    </div>
  );
}
