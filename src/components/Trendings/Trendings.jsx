import { useEffect, useState } from 'react';
import fetchTrendingMovies from 'fetches/fetchDayTrendings';

import FilmList from 'components/FilmList/FilmList';

const Trendings = () => {
  const [films, setfilms] = useState();

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetchTrendingMovies();
      setfilms(res.results);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trendings today</h1>
      <ul>
        <FilmList films={films} />
      </ul>
    </div>
  );
};

export default Trendings;
