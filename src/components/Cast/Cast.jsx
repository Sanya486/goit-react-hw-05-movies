import fetchCast from 'fetches/fetchCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState();
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchCastDetails() {
      const data = await fetchCast(moviesId);
      console.log(data.cast);
      setCast(data.cast);
    }
    fetchCastDetails();
  }, [moviesId]);

  console.log(cast);

  if (cast?.length === 0) {
    return <>Sorrty</>
  }

  
  return (
    <>
      <ul>
        {cast?.map(character => {
          return (
            <li>
              <img
                src={'https://image.tmdb.org/t/p/w400' + character.profile_path}
                alt=""
              />
              <h3>{character.name}</h3>
              <p>Character: {character.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
