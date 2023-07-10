import { Link, useLocation } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      {films?.map((film, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
              <MovieIcon />
            </Avatar>
          </ListItemAvatar>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </ListItem>
      ))}
    </>
  );
};

export default FilmList;
