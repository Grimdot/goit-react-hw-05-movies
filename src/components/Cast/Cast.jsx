import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCredits } from 'services/moviesService';

import { CastList, CastListItem, ActorPhoto } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const credits = await getCredits(id);

        setCast(credits.cast);
      } catch {
        Notiflix.Notify.failure('Something went wrong :(');
      }
    };

    initialFetch();
  }, [id]);

  if (!cast) {
    return;
  }

  if (!cast.length) {
    return <p>There is no information about cast list...</p>;
  }

  return (
    <CastList>
      {cast.map(({ character, name, profile_path, id }) => {
        return (
          <CastListItem key={id}>
            <ActorPhoto
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w400/${profile_path}`
                  : `https://via.placeholder.com/160x240`
              }
              alt="Actor"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </CastListItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
