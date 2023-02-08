import {
  MoviesNavLink,
  MoviesNavList,
  MoviesNavListItem,
  TitleName,
  TitlePoster,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <MoviesNavList>
      {movies.length &&
        movies.map(({ title, id, name, poster_path }) => {
          return (
            <MoviesNavListItem key={id}>
              <MoviesNavLink to={`/movies/${id}`}>
                <TitlePoster
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w400${poster_path}`
                      : `https://via.placeholder.com/320x480`
                  }
                  alt="movie poster"
                />
                <TitleName>{title ? title : name}</TitleName>
              </MoviesNavLink>
            </MoviesNavListItem>
          );
        })}
    </MoviesNavList>
  );
};

export default MoviesList;
