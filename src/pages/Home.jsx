import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/moviesService';

const Home = () => {
  const [trenidngMovies, setTrenidngMovies] = useState([]);

  const initialFetch = async () => {
    try {
      const movies = await getTrending();
      setTrenidngMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initialFetch();
  }, []);

  if (!trenidngMovies) {
    return;
  }

  return <MoviesList movies={trenidngMovies} />;
};

export default Home;
