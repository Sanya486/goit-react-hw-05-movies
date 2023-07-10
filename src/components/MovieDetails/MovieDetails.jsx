import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import fetchMovieDetails from 'fetches/fetchMovieDetails';

const MovieDetails = () => {
  const [filmData, setfilmData] = useState();
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  console.log(location, 'location')

  console.log(window.location)
  useEffect(() => {
    async function fetchFilmData() {
      const data = await fetchMovieDetails(moviesId);
      setfilmData(data);
    }
    fetchFilmData();
  }, [moviesId]);
  return (
    <div>
      <Link to={backLinkHref.current}>Back to </Link>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w400' + filmData?.poster_path}
          alt=""
        />
        <h1>{filmData?.title}</h1>
        <p>User Score: {Math.round(filmData?.popularity) + '%'}</p>
        <h2>Overview</h2>
        <p>{filmData?.overview}</p>
        <h2>Genres</h2>
        <p>{filmData?.genres.map(genre => genre.name).join(', ')}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
