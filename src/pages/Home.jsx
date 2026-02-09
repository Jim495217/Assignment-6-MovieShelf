import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movieService";
import MovieGrid from "../components/MovieGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

function Home({ searchResults }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!searchResults) {
      fetchMovies();
    }
  }, [searchResults]);

  const displayedMovies = searchResults?.length
    ? searchResults
    : movies;

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return <MovieGrid movies={displayedMovies} />;
}

export default Home;
