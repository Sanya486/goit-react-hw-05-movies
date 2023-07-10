import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchSearchMovie from 'fetches/fetchSearchMovie';
import FilmList from 'components/FilmList/FilmList';

import SearchIcon from '@mui/icons-material/Search';
import { TextFieldSt, ButtonSt, FormSt } from './Movies.styled';

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
      <FormSt onSubmit={handlerSubmit}>
        <TextFieldSt
          id="outlined-basic"
          label="Enter movie name"
          variant="outlined"
          type="text"
          name="query"
        />
        <ButtonSt variant="contained" type="submit">
          <SearchIcon fontSize="large" />
        </ButtonSt>
      </FormSt>
      <ul>{querySt.length !== 0 && <FilmList films={querySt} />}</ul>
    </div>
  );
};

export default Movies;