import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { AdditionalInfoSt } from './MovieDetails.styled';
import LinearProgress from '@mui/material/LinearProgress';

import {
  Card,
  CardActions,
  Typography,
  CardContent,
  Divider
} from '@mui/material';

import { CardMediaSt, ImageContainer } from './MovieDetails.styled';


import fetchMovieDetails from 'fetches/fetchMovieDetails';

const MovieDetails = () => {
  const [filmData, setfilmData] = useState();
  const [isLoaderShown, setIsLoaderShown] = useState(false);
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchFilmData() {
      try {
        setIsLoaderShown(true);
        const data = await fetchMovieDetails(moviesId);
        setfilmData(data);
        setIsLoaderShown(false);
      } catch (error) {
       console.log(error) 
      }
    }
    fetchFilmData();
  }, [moviesId]);
  return (
    <>
      {isLoaderShown && <LinearProgress />}
      <Card sx={{ maxWidth: 1200 }}>
        <AdditionalInfoSt to={backLinkHref.current}>
          <ArrowBackIosIcon />
          Back to Movies
        </AdditionalInfoSt>
        <ImageContainer>
          <CardMediaSt
            sx={{ height: 1000, mt: 1.4 }}
            image={
              'https://image.tmdb.org/t/p/original/' + filmData?.poster_path
            }
            title="green iguana"
          />
        </ImageContainer>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {filmData?.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="span">
            User Score:
          </Typography>
          <Typography variant="string" color="text.secondary">
            {' ' + Math.round(filmData?.popularity) + '%'}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {filmData?.overview}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Genres
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {filmData?.genres.map(genre => genre.name).join(', ')}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <AdditionalInfoSt to="cast">Cast</AdditionalInfoSt>
          <AdditionalInfoSt to="reviews">Reviews</AdditionalInfoSt>
        </CardActions>
        <Suspense fallback={<LinearProgress />}>
          <Outlet />
        </Suspense>
      </Card>
    </>
  );
};

export default MovieDetails;
