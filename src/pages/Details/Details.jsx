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
        const {
          poster_path,
          title,
          release_date,
          vote_average,
          overview,
          genres,
        } = movie;

        setMovieDetails({
          poster: poster_path
            ? `https://image.tmdb.org/t/p/w400${poster_path}`
            : `https://via.placeholder.com/400x600`,
          title: title,
          releaseYear: release_date.split('-')[0],
          userVotes: Math.floor(vote_average * 10),
          overview: overview,
          genres: genres.map(genre => {
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

  const { poster, title, releaseYear, userVotes, genres, overview } =
    movieDetails;

  return (
    <MovieDetailsWrap>
      <GoBackLink to={backLink} style={{ display: 'block' }}>
        Go back
      </GoBackLink>

      <AboutMovieWrap>
        <img src={poster} alt="Film poster" />

        <MovieStatsWrap>
          <h1>
            {title} {`(${releaseYear})`}
          </h1>
          <p>
            <VotesPercentage>{`${userVotes}%`}</VotesPercentage>
          </p>
          <h2>Genres:</h2>
          <p>{genres.join(', ')}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
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
