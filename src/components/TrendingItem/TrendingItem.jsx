import { Link } from 'react-router-dom';

const TrendingItems = ({ films }) => {


  return (
    <>
      {films?.map(film => (
        <li><Link to={`/movies/${film.id}`}>{film.title}</Link></li>
      ))}
    </>
  );
};

export default TrendingItems;
