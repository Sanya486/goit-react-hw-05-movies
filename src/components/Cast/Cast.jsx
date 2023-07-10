import fetchCast from 'fetches/fetchCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
} from '@mui/material';

import { FlexContainer } from './Cast.styled';

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
    return <>Sorry</>
  }

  
  return (
    <FlexContainer>
      {cast?.map(character => {
        return (
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              width="3500"
              image={'https://image.tmdb.org/t/p/w400' + character.profile_path}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Character: {character.character}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </FlexContainer>
  );
};

export default Cast;
