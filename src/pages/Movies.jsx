import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Searchbar from 'components/Searchbar/Searchbar';
import { getMoviesByName } from 'services/moviesService';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async e => {
    e.preventDefault();
    const querry = e.target.elements.name.value.trim();

    if (querry)
      try {
        setSearchParams({ query: querry });
        const movies = await getMoviesByName(querry);
        setSearchMovies(movies.results);
      } catch {
        Notiflix.Notify.failure('Something went wrong :(');
      }
    e.target.reset();
  };

  useEffect(() => {
    const fetchByQuery = async query => {
      try {
        const movie = await getMoviesByName(query);
        setSearchMovies(movie.results);
      } catch (error) {
        console.log(error);
        Notiflix.Notify.failure('Something went wrong :(');
      }
    };

    const searchQuery = searchParams.get('query');

    if (searchQuery) {
      fetchByQuery(searchQuery);
    }
  }, [searchParams]);

  return (
    <>
      <Searchbar handleSubmit={handleSubmit} />

      {searchMovies?.length > 0 && <MoviesList movies={searchMovies} />}
    </>
  );
};
export default Movies;
