import { useLocation } from 'react-router-dom';

import {
  MoviesLink,
  MoviesLinkList,
  MoviesLinkItem,
  TitleName,
  TitlePoster,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesLinkList>
      {movies.length &&
        movies.map(({ title, id, name, poster_path }) => {
          return (
            <MoviesLinkItem key={id}>
              <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
                <TitlePoster
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w400${poster_path}`
                      : `https://via.placeholder.com/320x480`
                  }
                  alt="movie poster"
                />
                <TitleName>{title ? title : name}</TitleName>
              </MoviesLink>
            </MoviesLinkItem>
          );
        })}
    </MoviesLinkList>
  );
};

export default MoviesList;
