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
    const searchQuerry = e.target.elements.name.value.trim();

    if (searchQuerry)
      try {
        setSearchParams({ query: searchQuerry });
        const movies = await getMoviesByName(searchQuerry);
        setSearchMovies(movies.results);
      } catch {
        Notiflix.Notify.failure('Something went wrong :(');
      }
    e.target.reset();
  };

  useEffect(() => {
    const queryParams = searchParams.get('query');

    const fetchByParams = async query => {
      try {
        const movie = await getMoviesByName(query);
        setSearchMovies(movie.results);
      } catch (error) {
        console.log(error);
        Notiflix.Notify.failure('Something went wrong :(');
      }
    };

    if (queryParams) {
      fetchByParams(queryParams);
    }
  }, [searchParams]);

  return (
    <>
      <Searchbar handleSubmit={handleSubmit} />

      {searchMovies?.length > 0 && <MoviesList movies={searchMovies} />}

      {searchMovies?.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          Nothing found by this query
        </p>
      )}
    </>
  );
};
export default Movies;
