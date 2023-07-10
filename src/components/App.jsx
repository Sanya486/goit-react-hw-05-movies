import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:moviesId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
    </Routes>
  );
};
