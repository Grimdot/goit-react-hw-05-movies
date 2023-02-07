import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import moviesService from 'services/moviesService';
const moviesAPI = new moviesService();

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const initialFetch = async () => {
      const movie = await moviesAPI.getMovieDetails(id);

      console.log(movie);
      setMovieDetails(movie);
    };

    initialFetch();
  }, [id]);

  console.log(movieDetails);

  return (
    <div>
      <Link to="/">Go back</Link>
      <img
        // src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
        alt="Film poster"
      />
    </div>
  );
};

export default MovieDetails;
