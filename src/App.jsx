import { useState } from "react";
import { searchMovies } from "./services/movieService";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    if (!query) return;

    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
