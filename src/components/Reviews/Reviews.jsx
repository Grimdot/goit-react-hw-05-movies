import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewes } from 'services/moviesService';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const review = await getReviewes(id);
        setReviews(review.results);
      } catch {
        Notiflix.Notify.failure('Something went wrong :(');
      } finally {
      }
    };

    initialFetch();
  }, [id]);

  if (!reviews) {
    return;
  }

  if (!reviews.length) {
    return <p>There is no reviews yet...</p>;
  }

  return (
    <ul>
      {reviews.map(({ author, id, content }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
