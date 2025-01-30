import { useState } from "react";

export default function Gamecard({
  title,
  releaseDate,
  genres,
  backgroundImg,
  description,
}) {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`Gamecard ${expanded ? "expanded" : ""}`} // This is the class that will be toggled when the card is clicked.
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
    </div>
  );
}
