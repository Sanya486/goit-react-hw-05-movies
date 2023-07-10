import { Link, useLocation } from 'react-router-dom';

const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      {films?.map((film, index) => (
        <li key={index}>
          <Link  to={`/movies/${film.id}`} state={{from: location}}>{film.title}</Link>
        </li>
      ))}
    </>
  );
};

export default FilmList;
