import Notiflix from 'notiflix';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieDetails } from 'services/moviesService';

import {
  MovieDetailsWrap,
  GoBackLink,
  AboutMovieWrap,
  MovieStatsWrap,
  VotesPercentage,
  MoreDetailsLinkWrap,
  MoreDetailsLink,
} from './Details.styled';

const Details = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const movie = await getMovieDetails(id);

        setMovieDetails({
          poster: movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
            : `https://via.placeholder.com/400x600`,
          title: movie.title,
          releaseYear: movie.release_date.split('-')[0],
          userVotes: Math.floor(movie.vote_average * 10),
          overview: movie.overview,
          genres: movie.genres.map(genre => {
            return genre.name;
          }),
        });
      } catch {
        Notiflix.Notify.failure('Something went wrong :(');
      }
    };
    initialFetch();
  }, [id]);

  if (!movieDetails) {
    return;
  }

  return (
    <MovieDetailsWrap>
      <GoBackLink to={backLink} style={{ display: 'block' }}>
        Go back
      </GoBackLink>

      <AboutMovieWrap>
        <img src={movieDetails.poster} alt="Film poster" />

        <MovieStatsWrap>
          <h1>
            {movieDetails.title} {`(${movieDetails.releaseYear})`}
          </h1>
          <p>
            <VotesPercentage>{`${movieDetails.userVotes}%`}</VotesPercentage>
          </p>
          <h2>Genres:</h2>
          <p>{movieDetails.genres.join(', ')}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
        </MovieStatsWrap>
      </AboutMovieWrap>

      <hr />

      <h2>Additional Information</h2>

      <MoreDetailsLinkWrap>
        <MoreDetailsLink to="cast"> Cast </MoreDetailsLink>
        <MoreDetailsLink to="reviews"> Reviews </MoreDetailsLink>
      </MoreDetailsLinkWrap>

      <hr />

      <Outlet />
    </MovieDetailsWrap>
  );
};

export default Details;
