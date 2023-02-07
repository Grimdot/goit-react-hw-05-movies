import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import moviesService from 'services/moviesService';
import Header from './Header/Header';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import SearchForm from './SearchForm/SearchForm';

const moviesAPI = new moviesService();

export const App = () => {
  const [movies, setMovies] = useState([]);

  const initialFetch = async () => {
    const movies = await moviesAPI.getTrending();
    setMovies(movies.results);
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const newQuerry = e.target.elements.name.value.trim();
    const movies = await moviesAPI.getMoviesByName(newQuerry);

    setMovies(movies.results);

    e.target.reset();
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/movies"
          element={<SearchForm handleSubmit={handleSubmit} />}
        />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      <div></div>
    </>
  );
};
