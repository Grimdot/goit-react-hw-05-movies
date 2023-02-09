import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from './Cast/Cast';
import Details from './Details/Details';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:id" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
