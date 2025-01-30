import { useState } from "react";

export default function Gamecard({ title, releaseDate, genres }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`Gamecard ${expanded ? "expanded" : ""}`}
      onClick={handleExpand}
    >
      <h3>{title}</h3>
      <h5>{releaseDate}</h5>
      <p>
        <strong>Genres:</strong> {genres.map((genre) => genre.name).join(", ")}
      </p>
    </div>
  );
}
