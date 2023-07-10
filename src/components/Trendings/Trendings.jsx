import { useEffect, useState } from 'react';
import fetchTrendingMovies from 'fetches/fetchDayTrendings';

import TrendingItems from 'components/TrendingItem/TrendingItem';

const Trendings = () => {
  const [films, setfilms] = useState();

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetchTrendingMovies();
      setfilms(res.results)
    }
    fetchMovies()
  }, [])

  return (
    <div>
      <h1>Trendings today</h1>
      <ul>
        <TrendingItems films={ films} />
      </ul>
    </div>
  );
};

export default Trendings;
