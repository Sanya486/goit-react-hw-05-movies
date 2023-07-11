import { useEffect, useState } from 'react';
import fetchTrendingMovies from 'fetches/fetchDayTrendings';

import LinearProgress from '@mui/material/LinearProgress';


import FilmList from 'components/FilmList/FilmList';

const Trendings = () => {
  const [films, setfilms] = useState([]);
  const [isLoaderShown, setIsLoaderShown] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoaderShown(true);
        const res = await fetchTrendingMovies();
        setfilms(res.results);
        setIsLoaderShown(false);
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies();
    
  }, []);

  return (
    <div>
      <h1>Trendings today</h1>
      {isLoaderShown && <LinearProgress/>}
      <ul>
        <FilmList films={films} />
      </ul>
    </div>
  );
};

export default Trendings;
