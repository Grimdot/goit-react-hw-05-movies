import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieCredits from './MovieCredits/MovieCredits';
import MovieDetails from './MovieDetails/MovieDetails';
import MovieReviews from './MovieReviews/MovieReviews';
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>

          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
      <div></div>
    </>
  );
};
