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
import LinearProgress from '@mui/material/LinearProgress';

const Cast = () => {
  const [cast, setCast] = useState();
  const { moviesId } = useParams();
 const [isLoaderShown, setIsLoaderShown] = useState(false);

  useEffect(() => {
    async function fetchCastDetails() {
      try {
         setIsLoaderShown(true);
         const data = await fetchCast(moviesId);
         setCast(data.cast);
         setIsLoaderShown(false);
      } catch (error) {
        console.log(error)
      }
    }
    fetchCastDetails();
  }, [moviesId]);


  if (cast?.length === 0) {
    return <>Sorry</>
  }

  
  return (
    <FlexContainer>
      {isLoaderShown && <LinearProgress />}
      {cast?.map((character, index) => {
        return (
          <Card key={index} sx={{ maxWidth: 200 }}>
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
