import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchSearchMovie from 'fetches/fetchSearchMovie';
import FilmList from 'components/FilmList/FilmList';

const Movies = () => {
  const [querySt, setQuerySt] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  

  useEffect(() => {
    if (queryParam === '' || queryParam === null) return;

    async function fetchFilm() {
      const queryData = await fetchSearchMovie(queryParam);
      setQuerySt(queryData.results);
    }

    fetchFilm();
  }, [queryParam]);


  function handlerSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <ul>{querySt.length !== 0 && <FilmList films={querySt} />}</ul>
    </div>
  );
};

export default Movies;
