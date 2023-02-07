import { Link } from 'react-router-dom';

const Home = ({ movies }) => {
  return (
    <ul>
      {movies.length &&
        movies.map(({ title, id, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}> {title ? title : name}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Home;
