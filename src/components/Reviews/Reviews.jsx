import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import fetchReviews from 'fetches/fetchReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchReviewsList() {
      const data = await fetchReviews(moviesId);
      console.log(data);
      setReviews(data.results);
    }
    fetchReviewsList();
  }, [moviesId]);
  return (
    <>
      <ul>
        {reviews?.length === 0 ? (
          <p>We don`t have any reviews for this movie</p>
        ) : (
          reviews?.map(review => {
            return (
              <li>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default Reviews;
