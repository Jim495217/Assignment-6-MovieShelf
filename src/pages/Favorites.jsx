import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div>
      <h2>Your Favorites</h2>
      <MovieGrid movies={favorites} />
    </div>
  );
}

export default Favorites;
