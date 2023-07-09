import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<>Home</>} />
          <Route path="/movies" element={<>Movies</>}>
            <Route path="cast" element={<>Product</>} />
            <Route path="reviews" element={<>Product</>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
