import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import fetchReviews from 'fetches/fetchReviews';
import LinearProgress from '@mui/material/LinearProgress';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { moviesId } = useParams();
    const [isLoaderShown, setIsLoaderShown] = useState(false);


  useEffect(() => {
    async function fetchReviewsList() {
      try {
        setIsLoaderShown(true);
        const data = await fetchReviews(moviesId);
        setReviews(data.results);
        setIsLoaderShown(false);
      } catch (error) {
        console.log(error)
      }
    }
    fetchReviewsList();
  }, [moviesId]);

  if (reviews?.length === 0) {
    return <p>We don`t have any reviews for this movie</p>;
  }
  return (
    <>
      {isLoaderShown && <LinearProgress />}
      <ul>
        {reviews?.map((review, index) => {
          return (
            <li key={index}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
