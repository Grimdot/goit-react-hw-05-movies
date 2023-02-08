import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/moviesService';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const initialFetch = async () => {
    const movie = await getTrending();

    setMovies(movie.results);
  };

  useEffect(() => {
    initialFetch();
  }, []);

  return <MoviesList movies={movies} />;
};

export default Home;
